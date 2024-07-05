const UserModel = require("../model/UserModel");
const EmailSend = require("../utility/EmailHelper");
const { EncodeToken } = require("../utility/TokenHelper");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const { logToFile } = require("../utility/SaveLogs");

const VerifyUserService = async (req) => {
	try {

		let { email, password } = req.body;
		let username = ""
		if (!validator.isEmail(email)) {
			username = email
			email = ""
		}
		const MatchStage = {
			$match: {
				$or: [
					{ email: { $eq: email } },
					{ username: { $eq: username } }
				]
			}
		}
		const data = await UserModel.aggregate([
			MatchStage,
		]);
		const total = data.length
		const user = data[0];
		logToFile(user, 'login')
		if (total === 1) {
			if (!user.isActive) {
				return { status: "failed", isActive: false, message: "User is not active" };
			}
			const enteredPasswordHash = await bcrypt.hash(password, user.salt);
			// Compare the hashed passwords
			if (enteredPasswordHash === user.password) {
				// Create token
				const token = EncodeToken(user.email, user._id.toString());

				return {
					status: "success",
					message: "Authentication successful",
					token: token,
					user_id: user._id.toString(),
					username: user.username,
				};
			} else {
				return { status: "failed", isActive: true, message: "Incorrect password" }; // Incorrect password
			}
		} else {
			return { status: "failed", message: "User doesn't exists" };
		}
	} catch (err) {
		return { status: "failed", message: err.message };
	}
};

const CreateUserService = async (req) => {

	const { username, email } = req.body;
	try {
		const existingUser = await UserModel.findOne({ $or: [{ username }, { email }] });
		if (existingUser) {
			return { success: false, error: 'User already exists' };
		}

		let code = Math.floor(100000 + Math.random() * 900000);
		req.body.otp = code;

		// Hash Password
		const saltRounds = 10;
		const salt = await bcrypt.genSalt(saltRounds);
		const plainPassword = req.body.password;
		const hashPassword = await bcrypt.hash(plainPassword, salt);

		req.body.password = hashPassword;
		req.body.salt = salt;

		const newUser = new UserModel(req.body);
		const savedUser = await newUser.save();
		logToFile(savedUser, 'savedUser')
		let emailText = `Your Verification code Is ${code}`;
		let emailSubject = "Email Verification";
		const sendmail = await EmailSend(email, emailText, emailSubject);
		logToFile(sendmail, 'savedUser')
		return { success: true, error: null, data: savedUser };

	} catch (error) {
		logToFile(error, 'error');
		console.log("Error to create user:::", error)
	}
};

const UpdateUserService = async (req) => {
	try {
		let user_id = req.headers.user_id;
		// Hash Password
		const saltRounds = 10;
		const salt = await bcrypt.genSalt(saltRounds);
		const plainPassword = req.body.password;
		const hashPassword = await bcrypt.hash(plainPassword, salt);
		//   return salt;
		req.body.password = hashPassword;
		req.body.salt = salt;

		await UserModel.updateOne(
			{ _id: user_id },
			{ $set: req.body },
			{ upsert: true },
		);
		return { status: "success", message: "user updated successfully" };
	} catch (err) {
		return { status: "failed", message: err.message };
	}
};




const VerifyOTPService = async (req) => {
	try {
		const email = req.params.email;
		const otp = req.params.otp;
		const setIsActive = true;

		const result = await UserModel.findOne({ email, otp }).count();
		console.log("OTP Data", result)
		if (result === 1) {
			await UserModel.findOneAndUpdate(
				{ email, otp },
				{ $set: { otp: "0", isActive: setIsActive } },
				{ returnDocument: "after" }
			);
			return { status: "success", message: "OTP Verified" };
		} else {
			return { status: "failed", message: "Invalid OTP" };
		}
	} catch (error) {
		return { status: "failed", message: error };
	}
};

const VerifyEmailService = async (req) => {
	try {
		const email = req.params.email;
		const otp = Math.floor(100000 + Math.random() * 900000);
		const text = `Your OTP is ${otp}`;
		const subject = "Verification OTP";

		const user = await UserModel.findOne({ email }).count();
		if (user === 1) {
			await EmailSend(email, text, subject);
			await UserModel.updateOne({ email }, { $set: { otp } }, { upsert: true });
			return { status: "success", message: "OTP Sent!" };
		} else {
			res.status(200).json({ status: "failed", data: "No User Found" });
		}
	} catch (error) {
		res.status(401).json({ status: "failed", data: error });
	}
};
const ResetPasswordService = async (req) => {
	try {
		const email = req.body.email;
		const otp = req.body.otp;
		const result = await UserModel.findOne({
			email,
			otp,
			isActive: true,
		}).count();

		const saltRounds = 10;
		const salt = await bcrypt.genSalt(saltRounds);
		const plainPassword = req.body.password;
		const hashPassword = await bcrypt.hash(plainPassword, salt);
		if (result === 1) {
			await UserModel.updateOne(
				{ email },
				{ password: hashPassword, salt, otp: "0" },
			);
			return { status: "success", data: "Password changed successfully!" };
		} else {
			return { status: "failed", data: "Invalid OTP" };
		}
	} catch (error) {
		return { status: "failed", data: error };
	}
};

module.exports = {
	VerifyUserService,
	CreateUserService,
	UpdateUserService,
	VerifyOTPService,
	VerifyEmailService,
	ResetPasswordService,
};

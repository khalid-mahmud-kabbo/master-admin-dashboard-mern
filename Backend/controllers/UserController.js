const userModel = require("../model/UserModel");
const { ObjectId } = require("mongodb");
const { logToFile } = require("../utility/SaveLogs");
const {
	CreateUserService,
	VerifyUserService,
	UpdateUserService,
	VerifyOTPService,
	VerifyEmailService,
	ResetPasswordService,
} = require("../services/UserService");

const createUser = async (req, res) => {
	const result = await CreateUserService(req);
	return res.json(result);
};

const VerifyLogin = async (req, res) => {
	const result = await VerifyUserService(req);
	if (result["status"] === "success") {
		//cookie set
		let cookieOption = {
			expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
			domain: process.env.DOMAIN,
			httpOnly: true,
		};
		res.cookie("token", result["token"], cookieOption);

		return res.status(200).json(result);
	} else {
		return res.status(200).json(result);
	}
};

const updateUser = async (req, res) => {
	const result = await UpdateUserService(req);
	return res.status(200).json(result);
};



const updateUserStatus = async (req, res) => {
	try {
		const result = await userModel.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).json({
			success: true,
			message: "User Updated successfully",
			data: result,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			error: err.message,
		});
	}
};



const deleteUser = async (req, res) => {
	try {
		const deletedUser = await userModel.findByIdAndDelete(req.params.id);
		res.status(200).json({
			success: true,
			message: "User deleted successfully",
			data: deletedUser,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			error: err.message,
		});
	}
};




const getUser = async (req, res) => {
	try {
		const userId = req.params.id;
		// Find the user by ID and select the fields to exclude
		const user = await userModel.findById(userId).select('-password -salt -otp -updatedAt');

		if (!user) {
			return res.status(404).json({
				success: false,
				error: "User not found"
			});
		}

		// Assuming wallet data is part of the user model
		const userWithWallet = user.toObject();

		res.status(200).json({
			success: true,
			data: userWithWallet,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			error: err.message,
		});
	}
};




const getAllUsers = async (req, res) => {
	let page = 1;
	if (req.params && req.params.page) {
		page = req.params.page
	}
	try {
		const projectionStage = {
			$project: {
				username: 1,
				status: 1,
				email: 1
			}
		}
		const pageSize = 10;
		const pipeline = [
			// Pagination stages
			{ $skip: (page - 1) * pageSize },  // Skip documents based on the page number
			{ $limit: pageSize },  // Limit the number of documents per page
			projectionStage
		]
		const totalCount = await userModel.countDocuments()
		const users = await userModel.aggregate(pipeline);
		res.status(200).json({
			success: true,
			count: totalCount,
			data: users,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			error: err.message,
		});
	}
};

const verifyOTP = async (req, res) => {
	const result = await VerifyOTPService(req);
	return res.status(200).json(result);
};

const verifyEmail = async (req, res) => {
	const result = await VerifyEmailService(req);
	return res.status(200).json(result);
};
const resetPassword = async (req, res) => {
	const result = await ResetPasswordService(req);
	return res.status(200).json(result);
};

module.exports = {
	createUser,
	updateUser,
	updateUserStatus,
	deleteUser,
	getUser,
	getAllUsers,
	VerifyLogin,
	verifyOTP,
	verifyEmail,
	resetPassword,
};

const { DecodeToken } = require("../utility/TokenHelper");
const UserModel = require("../model/UserModel");
const { logToFile } = require("../utility/SaveLogs");
module.exports = async (req, res, next) => {

	const authValue = req.headers["authorization"];
	let authToken = null;
	if (authValue) {
		authToken = authValue.split(" ")[1];
	} else if (req.headers["cookie"]) {
		authToken = req.headers["cookie"].split("=")[1];
	} else {
		authToken = req.cookies["token"]
	}

	try {


		let decoded = await DecodeToken(authToken);
		// console.log("decoded", decoded)

		if (decoded === null) {
			return res.status(401).json({
				status: "Fail",
				message: "Unauthorized"
			});
		} else {
			let email = decoded['email'];
			let user_id = decoded['user_id'];

			const user = await UserModel.findOne({ _id: user_id });
			req.headers.email = email;
			req.headers.user_id = user_id;
			req.user = user
			next();
		}
	} catch (error) {
		return res.status(500).json({
			status: "Error",
			message: "Internal Server Error"
		});
	}
};

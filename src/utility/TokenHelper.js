const jwt = require("jsonwebtoken");

exports.EncodeToken = (email, user_id) => {
	let KEY = process.env.JWT_SECRET;
	let EXPIRE = { expiresIn: process.env.JWT_LIFETIME };
	let PAYLOAD = { email: email, user_id: user_id };
	return jwt.sign(PAYLOAD, KEY, EXPIRE);
};

exports.DecodeToken = (token) => {
	try {
		let KEY = process.env.JWT_SECRET;
		return jwt.verify(token, KEY);
	} catch (e) {
		return null;
	}
};

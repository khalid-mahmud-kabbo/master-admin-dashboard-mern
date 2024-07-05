const bcrypt = require("bcrypt");

exports.PasswordHash = async (password) => {
	const saltRounds = 10;
	const salt = await bcrypt.genSalt(saltRounds);
	const hashPassword = await bcrypt.hash(password, salt);
	return hashPassword;
}
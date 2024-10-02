const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
	{
		fullname: {
			type: String,
		},
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		phone: {
			type: Number,
			required: true,
			unique:true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			default: "user",
			enum: ["user", "editor", "author", "moderator", "supportagent", "admin", "superadmin"],
		},
		status: {
			type: String,
			default: "active",
			enum: ["active", "banned"],
		},
		otp: {
			type: String,
			required: true,
		},
		salt: {
			type: String,
			required: true,
		},
		ip: {
			type: String,
		},
		isActive: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	},
);

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;

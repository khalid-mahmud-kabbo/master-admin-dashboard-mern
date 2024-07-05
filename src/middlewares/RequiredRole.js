// middleware/auth.js
const { logToFile } = require("../utility/SaveLogs");
exports.requireRole = (requiredRole) => {
	return (req, res, next) => {
		// logToFile(req.user, "auth")
		const user = req.user; // Assuming you have middleware to populate req.user

		if (!user || !requiredRole.includes(user.role)) {
			return res.status(403).json({ message: 'Unauthorized' });
		}
		logToFile("user role is authorized", "auth")
		next();
	};
};
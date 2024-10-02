const router = require("express").Router();

const AuthVerify = require("../middlewares/AuthVerification");

const { requireRole } = require("../middlewares/RequiredRole");
const { logToFile } = require("../utility/SaveLogs");

const UserController = require("../controllers/UserController");
router.post("/create-user", UserController.createUser);
router.post("/login", UserController.VerifyLogin);
router.put("/update-user/:id", AuthVerify, UserController.updateUser);
router.put("/admin/update-user/:id", AuthVerify, requireRole(["admin", "superadmin"]), UserController.updateUserStatus);
router.delete("/delete-user/:id", AuthVerify, requireRole(["admin", "superadmin"]), UserController.deleteUser);
router.get("/get-user/:id", UserController.getUser);
router.get("/get-all-users", AuthVerify, requireRole(["admin", "superadmin"]), UserController.getAllUsers);
router.get("/get-all-users/page/:page", AuthVerify, requireRole(["admin", "superadmin"]), UserController.getAllUsers);
router.post("/resetPassword", UserController.resetPassword);
router.get("/verifyEmail/:email", UserController.verifyEmail);
router.get("/verifyOTP/:email/:otp", UserController.verifyOTP);

module.exports = router;

const { register, login } = require("../controllers/authControllers");
const { checkUser } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("dashboard/home", checkUser); 
router.post("auth/sign-up", register);
router.post("auth/sign-in", login);

module.exports = router;

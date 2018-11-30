const router = require('express').Router();

const user = require('./../controller/userController.js');

router.route("/login").post(user.login);
router.route("/register").post(user.register);
router.route("/logout").get(user.logout);
router.route("/api/findUser").get(user.findUser);

module.exports = router;

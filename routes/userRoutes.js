const router = require('express').Router();

const user = require('./../controller/userController.js');

router.route("/login").get(user.login);

module.exports = router;

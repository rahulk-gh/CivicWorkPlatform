const router = require('express').Router();

const user = require('./../controller/userController.js');

//TESTING ROUTE
router.route("/log").get(function(req, res){
  res.send("Hello World")
})
///////////////

router.route("/login").post(user.login);
router.route("/register").post(user.register);
router.route("/logout").get(user.logout);

module.exports = router;

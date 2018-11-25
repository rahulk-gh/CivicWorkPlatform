const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const path = require('path');

const cookies = require('cookie-parser');
router.use(cookies());

//Makes All Routes except public routes require authentication
/* const publicRoutes = ["/", "/login", "/register"];
const Authenticate = require('./../controller/authenticate.js');

router.route("*").all(function (req, res, next) {
  if (publicRoutes.includes(req.path)) { next(); }
  else {
    Authenticate(req.cookies.sessionID).then(function (authorized) {
      if (authorized) { console.log("User is authorized"); next(); }
      else {
        res.send("<h1>403 Forbidden</h1><h3>You don't have permission to access " + req.path + "</h3>");
      }
    });
  }
}) */

//Public Routes
router.use("/", userRoutes);

//Protected Routes


router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../citizen/build/index.html"));
});

module.exports = router;

const app = require('express').Router();
const passport = require("passport");
const db = require("./../models");
const path = require("path");

//handling user sign up
app.route("/register").post(function (req, res) {
   db.User.register(new db.User(req.body),req.body.password, function(err, user){
    if(err){
         console.log(err);
         return res.render('register');
     } //user stragety
     passport.authenticate("local")(req, res, function(){
         res.redirect("login"); //once the user sign up
    });
 });
});

app.route('/cookie').get(function (req, res) {
  res.cookie("auth_spotify", "helloWorld");
  res.send(req.cookies.auth_spotify);
})

app.route('/').post(function (req, res) {
  
})

module.exports = app;

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const login = require('./login.js');
const bubble = require('./bubble');
const hash = require('js-sha256');
const crypt = require('js-sha512');
const db = require('./../models');

const Authenticate = (session) => {
  return new Promise((resolve, reject) => {
    db.User.findOne({ sessionID: session }).then(response => {
      if(response) {
        console.log(response);
        if(response.tokenExpired) { resolve(false) } else { resolve(true) }
      } else {
        resolve(false)
      };
    });
  })
}

// API Routes
router.use("/api", apiRoutes);

router.use("/secret", login);

router.use("/", bubble);
const react = path.join(__dirname, "../client/build/index.html");

router.route("/bubbles").get(function(req, res) {
  Authenticate(req.cookies.sessionID)
  .then(pass => !pass ? res.send("403 FORBIDDEN ENTRY") : res.sendFile(react));
});

router.route("/secret/helloWorld").get(function(req,res){
  db.User.findOne({ username: "AngelusQQQ" })
    .then(response => {
      console.log(response);
      res.send("Hello World");
    })
});

router.route("/register").post(function (req, res) {
  console.log(req.body.password);

  if(req.body.password == "") {
    res.redirect("/register");
  } else {
    db.User.register(new db.User(req.body), req.body.password, function(err, user){
      if(err){
        console.log(err);
      }
      res.send('You have successfully registered with Bubbles!');
    });
  }
});

router.route('/login').post(function(req, res) {
  db.User.findOne({ username: req.body.username })
    .then(response => {
      if(response.password == req.body.password) {
        let state = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 32; i++) {
          state += characters.charAt(Math.floor(Math.random() * 32));
        }
        state = crypt.sha512(state);
        res.cookie("sessionID", state, { httpOnly: true, expires: new Date(Date.now() + 60000)});
        res.redirect("/bubbles")
        db.User.findOneAndUpdate({ username: req.body.username }, { token: state, tokenExpired: false })
          .then(response => {
            setTimeout(function(){
              db.User.findOneAndUpdate({ username: req.body.username }, { tokenExpired: true })
              .then(response => console.log(response));
              console.log("SESSION DELETED");
            }, 60000);
          })
          .catch(err => console.log(err));
      } else {
        res.send("Incorrect Password");
      }
    })
    .catch(err => console.log(err));
});

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

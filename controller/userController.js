const db = require('../models');
const crypt = require('js-sha512');

const generateKey = () => {
  let sessionID = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 32; i++) {
    sessionID += characters.charAt(Math.floor(Math.random() * 32));
  }
  sessionID = crypt.sha512(sessionID);
  return sessionID;
}

module.exports = {
  register: async function (req, res) {
    const check = await db.User.findOne({ username: req.body.username });
    if(check) {
      res.send("404"); //Problem with Registration (Username in Use, Passwords Don't Match etc.)
    } else {
      const register = await db.User.create(new db.User(req.body));
      console.log(`${register.username} has been successfully registered!`);
      res.location("/login");
      res.end();
    }
  },
  login: async function (req, res) {
    const { username, password } = req.body;
    const login = await db.User.findOne({ username: username });

    if(login) {
      if(login.password == password) {
        const sessionTime = 3600000; //Default Session: 1 Hour
        const sessionID = generateKey();
        res.cookie("sessionID", sessionID, { httpOnly: true, expires: new Date(Date.now() + sessionTime) });
        const update = await db.User.updateOne({ username: username }, { sessionID: sessionID, sessionExpired: false });
        setTimeout(async function() {
          const destroy = await db.User.updateOne({ username: username }, { sessionExpired: true });
          console.log(`Session for ${destroy} has been deleted!`)
        }, sessionTime);
        res.location("/");
        res.end();
      } else {
        res.send("404");
      }
    }
  },
  logout: async function (req, res) {
    const Session = await db.User.updateOne({ sessionID: req.cookies.sessionID }, { sessionExpired: true });
    res.redirect("/");
  }
};

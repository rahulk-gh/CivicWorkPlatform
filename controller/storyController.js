const db = require('../models');

module.exports = {
  postStory: async function (req, res) {
    //Story Body Splitter
    const bodyparsed = req.body.body.split(".");
    const realbody = bodyparsed.map(input => input + ".");
    realbody.pop();
    console.log(realbody);
    //Upload to Database
    const story = await db.Stories.create({ title: req.body.title, author: req.body.author, body: req.body.body });
    for(let i = 0; i < realbody.length; i++) {
      const body = await db.Stories.findOneAndUpdate({ _id: story._id }, { $push: { _bodyparsed: realbody[i] }});
      const voting = await db.Stories.findOneAndUpdate({ _id: story._id }, { $push: { _voting: 0 }});
      console.log(`added ${realbody[i]}`);
    }
    //Redirect to newStory Page
    res.location("/dashboard/newStory")
    res.end();
  },
  findStory: async function (req, res) {
    const story = await db.Stories.find({});
    res.send(story);
  },
  findOneStory: async function (req, res) {
    const user = await db.User.findOne({ sessionID: req.cookies.sessionID })
    const story = await db.Stories.find({ author: user.username })
    res.send(story)
  },
  findStoryByAuthor: async function (req, res) {
    const user = await db.User.findOne({ sessionID: req.cookies.sessionID });
    const a = user.username;
    const story = await db.Stories.find({ author: a })
    res.send(story);
  },
  displayVoteStory: async function (req, res) {
  }
};

const router = require('express').Router();
const story = require('./../controller/storyController.js');

router.route("/submitStory").post(story.postStory);
router.route("/dashboard/all").get(story.findStory);
router.route("/api/story/:id").get(story.findOneStory);

module.exports = router;

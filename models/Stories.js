const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new StorySchema object
// This is similar to a Sequelize model
const StorySchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  body: { type: String, required: true },
  _bodyparsed: [],
  _voting: [],
  published: { type: Boolean }
});

// This creates our model from the above schema, using mongoose's model method
const Story = mongoose.model("Story", StorySchema);

// Export the Story model
module.exports = Story;

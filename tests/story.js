const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new Schema({
    title:{type: String, required: true},
    authorId:{type: String, required: true},
    description:{type:String, required:false},
    body: {type :String, required:true},
    tody: {type :String, required: false},
    flags: {type:String, required: false}
})

const Story = mongoose.model("Story", storySchema)

module.exports = Story;
const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const UserSchema = new Schema({

    username: {
        type: String,
        unique: true,
        trim: true,
        required: [true, "can't be blank"],
        index: true
    },
    image: {
        type: String,
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
          function(input) {
            return input.length >= 6;
          },
          "Password should be longer."
        ]
      },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        required: [true, "can't be blank"],
        index: true
    },
    userCreated: {
        type: Date,
        default: Date.now
    },
    sessionID: {
      type: String,
      trim: true,
      default: ""
    },
    sessionExpired: {
      type: Boolean,
      default: true
    }
    // _bubbleId: [
    //     {
    //         // Store ObjectIds in the array
    //         type: Schema.Types.ObjectId,
    //         // The ObjectIds will refer to the ids in the Note model
    //         ref: "Bubble"
    //     }
    // ]
});

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;

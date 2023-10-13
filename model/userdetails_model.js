const mongoose = require("mongoose");
var userSchema = new mongoose.schema({
  username: {
    type: String,
    required: [true, "user must have a username"],
    validate: {
      validator: function (value) {
        return /^[A-Za-z]+$/.test(value);
      },
      message: "Please provide a valid username.",
    },
  },
  avatar: {
    type: String,
    default: "",
  },

  email: {
    type: String,
    match: /^\S+@\S+\.\S+$/,
    required: [true, "user must have a email"],
    unique: true,
  },
  mobile: {
    type: String,
    required: [true, "Please provide a mobile number"],
    unique: true,
    validate: {
      validator: function (value) {
        return /^\d{10}$/.test(value);
      },
      message: "Please provide a valid 10-digit phone number.",
    },
  },

  password: {
    type: String,
    required: [true, "user must have a password"],
    minLength: [4, "Password must be at least 4 characters long"],
  },
  otp: {
    type: String,
    default: null,
  },
  otpExpiration: {
    type: Date,
    default: null,
  },
  isBlock: {
    type: Boolean,
    default: false,
  },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});
const User = db.model('User',userSchema)
module.exports = User
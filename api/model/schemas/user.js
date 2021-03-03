const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for user'],
      unique: true,
      minlength: 2,
      maxlength: 15,
    },
    score: {
      type: String,
    },
    id: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true },
);

const User = model('user', userSchema);

module.exports = User;

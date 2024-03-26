import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Fullname:{
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Username:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true,
    minlenght: 8
  },
  ProfilePic:{
    type: String,
    default: ""
  },
  Gender:{
    type: String,
    required: true,
    enum: ["male","female"],
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
}, {timestamps: true})

const User = mongoose.model('User', userSchema);

export default User;
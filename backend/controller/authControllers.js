import bcrypt from 'bcryptjs'
import User from "../models/userModel.js"
import generateToken from '../utils/generateToken.js'

export const loginUser = async(req, res) => {
  try {
    const {Email, password} = req.body;
    const user = await User.findOne({Email});
    const isPasswordcorrect = await bcrypt.compare(password, user?.password || "");

    if(!user || !isPasswordcorrect){
      return res.status(400).json({error: "Invalid username or password"})
    }
    generateToken(user._id, res)

    res.status(200).json({
      _id: user._id,
      Fullname: user.Fullname,
      Username: user.Username,
      ProfilePic: user.ProfilePic,
    });

  } catch (error) {
    console.log("Error in Login controller", error.message);
    res.status(500).json({error: "Internal Server Error"});
  }
}

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", {maxAge: 0})
    res.status(200).json({message: "Logged Out Successfully"})
  } catch (error) {
    console.log("Error in Logout controller", error.message);
    res.status(500).json({error: "Internal Server Error"});
  }

}


export const signup = async(req, res) => {
  try {
    const {Email, Fullname, Username, password, confirmpassword, Gender} = req.body;
    if(password != confirmpassword){
      return res.status(400).json({error:"Passwords do not match"})
    }

    const user = await User.findOne({Email})
    if(user){
      return res.status(400).json({error: "User with this Email exists"})
    }

    // Hash password here

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const boyPp = `https://avatar.iran.liara.run/public/boy?Username=${Username}`;
    const girlPp = `https://avatar.iran.liara.run/public/girl?Username=${Username}`
    const newUser = new User({
      Email,
      Username,
      Fullname,
      password: hashedPassword,
      Gender,
      ProfilePic: Gender == "male"? boyPp : girlPp,
    })

    if(newUser) {
      generateToken(newUser._id, res);
      await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      Email: newUser.Email,
      Fullname: newUser.Fullname,
      Username: newUser.Username,
      ProfilePic: newUser.ProfilePic,
    });
  }else {
    res.status(400).json({error: "Invalid user data"});
  }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({error: "Internal Server Error"});
  }
};
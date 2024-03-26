import User from "../models/userModel.js"

const getAllUsers = async(req, res)=> {
  try {
    const users = await User.find()
    if(!users || users.length ===0){
    res.status(404).json({message: "No Users found"})
  }
  return res.status(200).json(users)
  } catch (error) {
    next(error);
  }
}


export default getAllUsers
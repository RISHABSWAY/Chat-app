import mongoose from "mongoose";

const connectDB = async()=>{
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("connected to db");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
}

export default connectDB;
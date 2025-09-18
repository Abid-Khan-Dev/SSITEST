import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Mongodb", connect.connection.host);
  } catch (error) {
    console.log("Mongodb Connection Error", error.message);
    process.exit(1);
  }
};

export default connectDB;

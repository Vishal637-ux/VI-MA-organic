import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vimaorg:Pass12345@cluster0.djzh4ow.mongodb.net/Vima"
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("DB Error:", error);
  }
};

export default connectDB;

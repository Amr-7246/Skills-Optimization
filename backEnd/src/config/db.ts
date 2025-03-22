import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: "fullstackDB", // Specify the database name
    });
    console.log("🚀 MongoDB Connected Locally");
    } catch (error) {
    console.error("❌ MongoDB Connection Failed", error);
    process.exit(1);
    }
};

export default connectDB;

import mongoose from "mongoose";
//import DB_URI from "@/Config/env.js";
const DB_URI: string | undefined = process.env.DB_URI;
if (!DB_URI) {
  throw new Error(
    "Error connecting to database enter your DB_URI in your env variable"
  );
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`Database Connection Successful`);
  } catch (err) {
    console.log("Database Connection Failed", err);
  }
};

export default connectToDatabase;

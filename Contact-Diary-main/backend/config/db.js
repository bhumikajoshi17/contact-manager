const mongoose = require('mongoose');

const connectDB = async () => {
console.log("MONGO_URI:", process.env.MONGO_URI || "Not Found");
console.log("Attempting to connect to MongoDB...");
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("database is connected");
  } catch (err) {
    console.log("databse is not connected", err);
  }
};

module.exports = connectDB;

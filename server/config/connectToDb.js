const mongoose = require('mongoose');

const connectToDb = async () => {
  const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/myDatabase';
  try {
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    process.exit(1);
  }
};

module.exports = connectToDb;
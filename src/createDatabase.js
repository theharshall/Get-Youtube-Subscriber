const mongoose = require('mongoose');
const subscriberModel = require('./model/subscribers'); // Ensure path is correct
const data = require('./data'); // Ensure path is correct

require('dotenv').config();

// Connect to DATABASE
const DATABASE_URL = "mongodb://localhost/subscribers";
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Database created...'));

const refreshAll = async () => {
  try {
    // Clear existing data
    await subscriberModel.deleteMany({});
    console.log("Existing data deleted.");

    // Insert new data
    await subscriberModel.insertMany(data);
    console.log("New data inserted.");

    // Disconnect from database
    await mongoose.disconnect();
    console.log("Database connection closed.");
  } catch (error) {
    console.error("Error refreshing data:", error);
  }
};

refreshAll();

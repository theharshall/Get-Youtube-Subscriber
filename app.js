const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const subscriberModel = require('./src/model/subscribers');
const app = express();

const port = process.env.PORT || 3000;

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
const DATABASE_URL = "mongodb://localhost/subscribers";
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Connected to database'));

// Routes

// Root endpoint
app.get('/', (req, res) => {
  res.send('Hello World!!');
  console.log('Root endpoint hit');
});

// Get all subscribers
app.get('/subscribers', async (req, res) => {
  try {
    const subscribers = await subscriberModel.find().select('-__v');
    res.status(200).json(subscribers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get subscribers' names
app.get('/subscribers/names', async (req, res) => {
  try {
    const subscriberNames = await subscriberModel.find().select('name subscribedChannel -_id');
    res.status(200).json(subscriberNames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a subscriber by ID
app.get('/subscribers/:id', async (req, res) => {
  try {
    const subscriber = await subscriberModel.findById(req.params.id).select('-__v');
    if (!subscriber) {
      return res.status(404).json({ message: 'Subscriber not found' });
    }
    res.status(200).json(subscriber);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Subscriber doesn't exist with the given subscriber_id " });
  }
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});

require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');
const fs = require('fs');
const path = require('path');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for seeding');

    // Read the JSON data
    const dataPath = path.join(__dirname, '../client/public/data/designs.json');
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

    // Clear existing data
    await Project.deleteMany({});
    console.log('Cleared existing projects');

    // Insert new data
    await Project.insertMany(data.projects);
    console.log('Successfully seeded projects');

    process.exit();
  } catch (err) {
    console.error('Error seeding data:', err);
    process.exit(1);
  }
};

seedData();

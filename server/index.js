require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Project = require('./models/Project');
const Price = require('./models/Price');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json({ projects });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/api/projects/:id', async (req, res) => {
  try {
    const project = await Project.findOne({ id: req.params.id });
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Auth Route
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'Arina-admin' && password === 'arina_20_kozlovsla_23-!') {
    res.json({ success: true, token: 'arina-admin-token-secret', message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Admin Project CRUD Routes
app.post('/api/projects', async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json({ success: true, project: newProject });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

app.put('/api/projects/:id', async (req, res) => {
  try {
    const updatedProject = await Project.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProject) return res.status(404).json({ success: false, message: 'Project not found' });
    res.json({ success: true, project: updatedProject });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

app.delete('/api/projects/:id', async (req, res) => {
  try {
    const deletedProject = await Project.findOneAndDelete({ id: req.params.id });
    if (!deletedProject) return res.status(404).json({ success: false, message: 'Project not found' });
    res.json({ success: true, message: 'Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Prices Routes
app.get('/api/prices', async (req, res) => {
  try {
    let prices = await Price.findOne();
    if (!prices) {
      prices = new Price({
        designProject: '20 $ кв.м.',
        technicalProject: '10 $ кв.м.',
        authorSupervision: 'від 250$ в міс.'
      });
      await prices.save();
    }
    res.json(prices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put('/api/prices', async (req, res) => {
  try {
    let prices = await Price.findOne();
    if (!prices) {
      prices = new Price(req.body);
    } else {
      prices.designProject = req.body.designProject || prices.designProject;
      prices.technicalProject = req.body.technicalProject || prices.technicalProject;
      prices.authorSupervision = req.body.authorSupervision || prices.authorSupervision;
    }
    await prices.save();
    res.json({ success: true, prices });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

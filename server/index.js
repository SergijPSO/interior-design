require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Project = require('./models/Project');
const Price = require('./models/Price');
const Admin = require('./models/Admin');
const Content = require('./models/Content');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Multer storage for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { projectId, type } = req.body;
    if (!projectId || !type) {
      return cb(new Error('Missing projectId or type'), null);
    }
    let dir;
    if (projectId === 'main-carousel') {
      dir = path.join(__dirname, `../client/public/assets/images/main-carousel`);
    } else if (projectId === 'prices-banner') {
      dir = path.join(__dirname, `../client/public/assets/images/prices`);
    } else if (projectId === 'about') {
      dir = path.join(__dirname, `../client/public/assets/images/about`);
    } else {
      dir = path.join(__dirname, `../client/public/assets/images/designs/${projectId}/${type}`);
    }
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname) || '.jpg';
    cb(null, `${uniqueSuffix}${ext}`);
  }
});

const upload = multer({ storage: storage });

app.post('/api/upload', upload.array('images', 50), (req, res) => {
  try {
    const { projectId, type } = req.body;
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, message: 'No files uploaded' });
    }

    const fileUrls = req.files.map(file => {
      if (projectId === 'main-carousel') {
        return `/assets/images/main-carousel/${file.filename}`;
      } else if (projectId === 'prices-banner') {
        return `prices/${file.filename}`;
      } else if (projectId === 'about') {
        return `/assets/images/about/${file.filename}`;
      } else {
        return `/assets/images/designs/${projectId}/${type}/${file.filename}`;
      }
    });

    res.json({ success: true, urls: fileUrls });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ orderNumber: 1 });
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

// Auth & Recovery Routes
app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    let admin = await Admin.findOne({ username: 'Arina-admin' });
    if (!admin) {
      admin = new Admin({ username: 'Arina-admin', password: 'arina_20_kozlovsla_23-!', email: 'arinakozlovska@gmail.com' });
      await admin.save();
    }
    if (username === admin.username && password === admin.password) {
      res.json({ success: true, token: 'arina-admin-token-secret', message: 'Login successful' });
    } else {
      res.status(401).json({ success: false, message: 'Невірний логін або пароль' });
    }
  } catch (err) {
    if (username === 'Arina-admin' && password === 'arina_20_kozlovsla_23-!') {
      res.json({ success: true, token: 'arina-admin-token-secret', message: 'Login successful' });
    } else {
      res.status(401).json({ success: false, message: 'Невірний логін або пароль' });
    }
  }
});

app.post('/api/auth/forgot-password', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ success: false, message: 'Введіть email адресу' });
  }

  try {
    let admin = await Admin.findOne({ email: 'arinakozlovska@gmail.com' });
    if (!admin) {
      admin = new Admin({ username: 'Arina-admin', password: 'arina_20_kozlovsla_23-!', email: 'arinakozlovska@gmail.com' });
      await admin.save();
    }

    if (email.trim().toLowerCase() === admin.email.toLowerCase()) {
      res.json({ success: true, message: 'Email підтверджено. Введіть новий пароль.' });
    } else {
      res.status(404).json({ success: false, message: 'Цю пошту не знайдено в системі адміністрування (очікується arinakozlovska@gmail.com).' });
    }
  } catch (err) {
    if (email.trim().toLowerCase() === 'arinakozlovska@gmail.com') {
      res.json({ success: true, message: 'Email підтверджено. Введіть новий пароль.' });
    } else {
      res.status(404).json({ success: false, message: 'Цю пошту не знайдено в системі адміністрування.' });
    }
  }
});

app.post('/api/auth/reset-password', async (req, res) => {
  const { email, newPassword } = req.body;
  if (!email || !newPassword) {
    return res.status(400).json({ success: false, message: 'Всі поля обов\'язкові' });
  }

  try {
    let admin = await Admin.findOne({ email: 'arinakozlovska@gmail.com' });
    if (!admin) {
      admin = new Admin({ username: 'Arina-admin', password: 'arina_20_kozlovsla_23-!', email: 'arinakozlovska@gmail.com' });
    }

    if (email.trim().toLowerCase() === admin.email.toLowerCase()) {
      admin.password = newPassword;
      await admin.save();
      res.json({ success: true, message: 'Пароль успішно оновлено! Тепер ви можете увійти з новим паролем.' });
    } else {
      res.status(400).json({ success: false, message: 'Невірний email' });
    }
  } catch (err) {
    res.json({ success: true, message: 'Пароль успішно оновлено! Тепер ви можете увійти з новим паролем.' });
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

// Content Routes for Banners, About, Services
app.get('/api/content/:key', async (req, res) => {
  try {
    const content = await Content.findOne({ key: req.params.key });
    res.json(content ? content.data : {});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put('/api/content/:key', async (req, res) => {
  try {
    const updated = await Content.findOneAndUpdate(
      { key: req.params.key },
      { key: req.params.key, data: req.body },
      { new: true, upsert: true }
    );
    res.json({ success: true, data: updated.data });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

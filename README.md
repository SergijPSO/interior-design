# Interior Design Studio Web Application

A modern, full-stack web application for an Interior Design studio built with **Next.js**, **React**, **Node.js (Express)**, and **MongoDB**.

## Features

- **Responsive Frontend**: Built with Next.js (Pages router) and styled with SCSS and Tailwind/CSS.
- **Interactive Carousels**: Showcasing projects, design visualizations, and realizations using `react-responsive-carousel`.
- **Admin Panel**: Secure dashboard (`/admin`) for managing projects, contents, prices, and admin credentials.
- **RESTful API Backend**: Express.js server interacting with MongoDB via Mongoose.
- **Image Management**: Local/cloud upload handling via Multer for project visualisations and realisations.

---

## Project Structure

```text
interior-design/
├── client/                 # Next.js frontend application
│   ├── components/         # Modular components (Header, Footer, Main, About, etc.)
│   ├── hooks/              # Custom React hooks (useScreenWidth)
│   ├── pages/              # Next.js pages (index, admin, gallery/[id])
│   ├── public/             # Static assets and images
│   └── styles/             # SCSS stylesheets & variables
├── server/                 # Express.js backend API
│   ├── models/             # Mongoose schemas (Admin, Content, Price, Project)
│   ├── index.js            # Express app entry point
│   └── .env                # Environment variables
└── mongo_backup/           # MongoDB BSON database dumps
```

---

## Getting Started & Installation

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **MongoDB** / MongoDB Atlas account

### 1. Clone the Repository
```bash
git clone <repository-url>
cd interior-design
```

### 2. Configure Backend (`server/.env`)
Create or update `server/.env` with your MongoDB connection string:
```env
PORT=5001
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/interior-design?retryWrites=true&w=majority
```

### 3. Restore Database (Optional)
If you have a MongoDB dump in `mongo_backup/`, you can restore it using `mongorestore`:
```bash
mongorestore --uri="mongodb+srv://<username>:<password>@<cluster-url>" --nsInclude="interior-design.*" mongo_backup
```

### 4. Install Dependencies & Run

#### Run the Backend Server:
```bash
cd server
npm install
npm run dev
```
*(Server will start on `http://localhost:5001`)*

#### Run the Frontend Client:
Open a new terminal window:
```bash
cd client
npm install
npm run dev
```
*(Client will start on `http://localhost:3000`)*

---

## Build & Production Deployment

### Build Frontend:
```bash
cd client
npm run build
npm start
```

### Deployment (e.g., Vercel / Render / VPS)
- **Frontend**: Deploy the `client/` folder to **Vercel** or **Netlify**. Set environment variable `NEXT_PUBLIC_API_URL` pointing to your backend production URL.
- **Backend**: Deploy the `server/` folder to **Render**, **Railway**, or a VPS (Node.js + MongoDB Atlas).

INTERIOR DESIGN STUDIO - FULLSTACK WEB APPLICATION

DESCRIPTION:
A modern web application for an Interior Design studio built with Next.js (frontend) and Node.js/Express with MongoDB (backend).

PROJECT STRUCTURE:
- client/        Next.js frontend application & components
- server/        Express.js API & MongoDB Mongoose models
- mongo_backup/  MongoDB database dumps

GETTING STARTED & DEPLOYMENT:

1. Backend Setup:
   - Navigate to server/: cd server
   - Install dependencies: npm install
   - Configure .env file with MONGODB_URI
   - Run server: npm run dev

2. Frontend Setup:
   - Navigate to client/: cd client
   - Install dependencies: npm install
   - Run dev server: npm run dev

3. Database Restoration:
   - mongorestore --uri="mongodb+srv://<user>:<pass>@<cluster>" --nsInclude="interior-design.*" mongo_backup

4. Production Build:
   - cd client && npm run build

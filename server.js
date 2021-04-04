import express from 'express';
// import userRoutes from './routes/userRoutes.js';
import { userRoutes, postRoutes } from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middelware
app.use(express.json());

// API routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// lister
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

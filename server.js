import express from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/users', userRoutes);

// lister
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

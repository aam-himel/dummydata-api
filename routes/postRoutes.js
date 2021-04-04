import express from 'express';
import { posts } from '../data/index.js';
const router = express.Router();

router.get('/', (req, res) => {
  res.json(posts);
});

router.get('/:id', (req, res) => {
  const post = posts.find((p) => p._id === req.params.id);
  res.json(post);
});

export default router;

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

router.delete('/:id', (req, res) => {
  const newPosts = posts.filter((p) => p._id !== req.params.id);
  res.json(newPosts);
});

router.patch('/:id', (req, res) => {
  let post = posts.find((p) => req.params.id === p._id);
  let newPost = { ...post, title: req.body.title };
  console.log(req.body);
  res.json(newPost);
});

export default router;

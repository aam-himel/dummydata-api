import express from 'express';
const router = express.Router();
import { users } from '../data/index.js';

// Get users
router.get('/', (req, res) => {
  res.json(users);
});

// Find User by Id
router.get('/:id', (req, res) => {
  console.log(typeof req.params.id);
  const user = users.find((u) => u._id === req.params.id);
  res.json(user);
});

// Delete single user
router.delete('/:id', (req, res) => {
  let newUsers = users.filter((u) => u._id !== req.params.id);
  res.json(newUsers);
});

router.patch('/:id', (req, res) => {
  console.log(req.body.username);
  const user = users.find((u) => u._id === req.params.id);
  let newUser = { ...user, username: req.body.username };
  console.log(newUser);
  res.json(newUser);
});
export default router;

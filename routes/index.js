import express from 'express';
import user from './contacts.js';


const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

router.use('/user', user);
export default router;

import express from 'express';
import contacts from './contacts.js';


const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

router.use('/contacts', contacts);
export default router;

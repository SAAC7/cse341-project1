import express from 'express';
import contacts from './contacts.js';
import swagger from './swagger.js';


const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

router.use('/contacts', contacts);
router.use('/swagger', swagger);
export default router;

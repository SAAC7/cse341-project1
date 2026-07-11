import express from 'express';
import contacts from './contacts.js';
import swagger from './swagger.js';


const router = express.Router();
router.use('/', swagger);

router.get('/', (req, res) => {
  // #swagger.tags = ['Hello World'];
  res.send('Hello, World!');
});
router.use('/contacts', contacts);

export default router;

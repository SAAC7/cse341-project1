import express from 'express';
import contacts from './contacts.js';
import swagger from './swagger.js';


const router = express.Router();
router.use('/contacts', contacts);

router.get('/', (req, res) => {
  //$swagger.tags = ['Hello World'];
  res.send('Hello, World!');
});

router.use('/swagger', swagger);
export default router;

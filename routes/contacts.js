import express from 'express';
import contacts from '../controllers/contacts.js';

const router = express.Router();

router.get('/', contacts.getAllContacts);
router.get('/:id', contacts.getContactById);

export default router;
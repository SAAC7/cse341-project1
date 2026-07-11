import express from 'express';
import contacts from '../controllers/contacts.js';

const router = express.Router();

router.get('/', contacts.getAllContacts);
router.get('/:id', contacts.getContactById);

router.post('/', contacts.createUser);
router.put('/:id', contacts.updateUser);
router.delete('/:id', contacts.deleteUser);

export default router;
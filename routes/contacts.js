import express from 'express';
import user from '../controllers/contacts.js';

const router = express.Router();

router.get('/', user.getAllContacts);
router.get('/:id', user.getContactById);
// router.post('/', user.createUser);
// router.put('/:id', user.updateUser);
// router.delete('/:id', user.deleteUser);

export default router;
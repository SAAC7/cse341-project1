import {getDb} from '../data/database.js';
import { ObjectId } from 'mongodb';


const getAllContacts = async (req, res) => {
  try {
    const db = getDb();
    const users = await db.collection('contacts').find().toArray();
    res.status(200).json(users);
  } catch (err) {
    console.error('Error fetching contacts:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getContactById = async (req, res) => {
  const contactId = req.params.id;
  try {
    const db = getDb();
    const user = await db.collection('contacts').findOne({ _id: new ObjectId(contactId) });
    if (!user) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error('Error fetching contact by ID:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// const createUser = async (req, res) => {
//   // Implementation for creating a user
// };

// const updateUser = async (req, res) => {
//   // Implementation for updating a user
// };

// const deleteUser = async (req, res) => {
//   // Implementation for deleting a user
// };

export default {
  getAllContacts,
  getContactById,
  // createUser,
  // updateUser,
  // deleteUser,
};      

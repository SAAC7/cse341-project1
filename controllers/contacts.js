import {getDb} from '../data/database.js';
import { ObjectId } from 'mongodb';


const getAllContacts = async (req, res) => {
  //$swagger.tags = ['Contacts'];
  //$swagger.description = 'Endpoint to get all contacts';
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
  //$swagger.tags = ['Contacts'];
  //$swagger.description = 'Endpoint to get a contact by ID';
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

const createUser = async (req, res) => {
  //$swagger.tags = ['Contacts'];
  //$swagger.description = 'Endpoint to create a new contact';
  try{
    const contact = {
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday,
      username: req.body.username,
      ipaddress: req.body.ipaddress
    };
    const response = await getDb().collection('contacts').insertOne(contact);
    if (!response.acknowledged) {
      return res.status(500).json({ error: 'Failed to create contact' });
    }
    res.status(201).json({ message: 'Contact created successfully', contactId: response.insertedId });
  } catch (err) {
    console.error('Error creating contact:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateUser = async (req, res) => {
  //$swagger.tags = ['Contacts'];
  //$swagger.description = 'Endpoint to update a contact by ID';
  try {
    const contactId = new ObjectId(req.params.id);
    const updatedContact = {
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday,
      username: req.body.username,
      ipaddress: req.body.ipaddress
    };
    const response = await getDb().collection('contacts').replaceOne({ _id: contactId }, updatedContact);
    if (!response.acknowledged) {
      return res.status(500).json({ error: 'Failed to update contact' });
    }
    res.status(200).json({ message: 'Contact updated successfully' });
  } catch (err) {
    console.error('Error updating contact:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteUser = async (req, res) => {
  //$swagger.tags = ['Contacts'];
  //$swagger.description = 'Endpoint to delete a contact by ID';
  try {
    const contactId = new ObjectId(req.params.id);
    const response = await getDb().collection('contacts').deleteOne({ _id: contactId });
    if (!response.acknowledged) {
      return res.status(500).json({ error: 'Failed to delete contact' });
    }
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (err) {
    console.error('Error deleting contact:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default {
  getAllContacts,
  getContactById,
  createUser,
  updateUser,
  deleteUser,
};      

const express = require('express');
const auth = require('../middleware/authMiddleware');
const {
  getContacts,
  addContact,
  updateContact,
  deleteContact
} = require('../controllers/contactController');

const router = express.Router();

router.get('/', auth, getContacts);
router.post('/', auth, addContact);
router.put('/:id', auth, updateContact);
router.delete('/:id', auth, deleteContact);

module.exports = router;

const Contact = require('../models/Contact');

// GET all contacts (only logged-in user)
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({ userId: req.user.userId });
    res.json(contacts);
  } catch (err) {
    console.error("Get contacts error:", err);
    res.status(500).json({ message: "Failed to fetch contacts" });
  }
};

// ADD contact
exports.addContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const newContact = new Contact({
      name,
      email,
      phone,
      userId: req.user.userId
    });

    await newContact.save();
    res.status(201).json(newContact);

  } catch (err) {
    console.error("Add contact error:", err);

    // 🔥 SHOW VALIDATION ERROR (10-digit phone)
    if (err.name === "ValidationError") {
      return res.status(400).json({
        message: err.message
      });
    }

    res.status(500).json({
      message: "Failed to add contact"
    });
  }
};

// UPDATE contact (only own contact)
exports.updateContact = async (req, res) => {
  try {
    const updated = await Contact.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      req.body,
      { new: true, runValidators: true } // runValidators important
    );

    if (!updated) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json(updated);

  } catch (err) {
    console.error("Update contact error:", err);

    if (err.name === "ValidationError") {
      return res.status(400).json({
        message: err.message
      });
    }

    res.status(500).json({ message: "Failed to update contact" });
  }
};

// DELETE contact (only own contact)
exports.deleteContact = async (req, res) => {
  try {
    const deleted = await Contact.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId
    });

    if (!deleted) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json({ message: "Contact deleted" });

  } catch (err) {
    console.error("Delete contact error:", err);
    res.status(500).json({ message: "Failed to delete contact" });
  }
};

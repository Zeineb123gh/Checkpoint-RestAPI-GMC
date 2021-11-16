const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  getContactById,
  getOneContact,
  addContact,
  deleteContact,
  updateContact,
} = require("../../api proj/controllers/contact.controllers");

//Post methode
router.post("/", addContact);
//Get (All contact) methode
router.get("/", getAllContacts);

//Get contact by ID
router.get("/:id", getContactById);

//Get one contact
router.get("/:id", getOneContact);

//delete contact
router.delete("/:id", deleteContact);

//Update contact
router.put("/:id", updateContact);

module.exports = router;

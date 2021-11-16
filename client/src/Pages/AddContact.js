import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addContact, editContact } from "../JS/actions/contacts";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";

const AddContact = () => {
  const [contact, setContact] = useState({});
  const [edit, setEdit] = useState(false);
  const contactToEdit = useSelector((state) => state.contactReducer.contact);
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      setEdit(true);
    } else {
      setEdit(false);
    }
    edit
      ? setContact(contactToEdit)
      : setContact({ Name: "", LastName: "", Email: "", PhoneNumber: "" });
  }, [edit, contactToEdit]);

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleContact = () => {
    if (contact.Email && contact.Name) {
      if (edit) {
        dispatch(editContact(params.id, contact, history));
      } else {
        dispatch(addContact(contact, history));
      }
    } else {
      alert("This field is required");
    }
  };
  return (
    <form>
      <h1> Please fill in the fields </h1>
      <TextField
        id="outlined-number"
        label="Name"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        name="Name"
        onChange={handleChange}
        value={contact.Name}
      />
      <TextField
        id="outlined-number"
        label="Last Name"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        name="LastName"
        onChange={handleChange}
        value={contact.LastName}
      />{" "}
      <TextField
        id="outlined-number"
        label="Email"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        name="Email"
        onChange={handleChange}
        value={contact.Email}
      />{" "}
      <TextField
        id="outlined-number"
        label="Phone Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={contact.PhoneNumber}
        name="PhoneNumber"
        onChange={handleChange}
      />
      <Link to="/contacts">
        <Button onClick={handleContact}> {edit ? "Edit" : "Save"} </Button>
      </Link>
    </form>
  );
};

export default AddContact;

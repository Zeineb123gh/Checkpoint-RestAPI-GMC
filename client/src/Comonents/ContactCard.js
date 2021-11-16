import React from "react";
import "./ContactCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { deleteContact, getContact } from "../JS/actions/contacts";
import { Link } from "react-router-dom";

const ContactCard = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    const result = window.confirm("confirm delete?");
    if (result) {
      dispatch(deleteContact(contact._id));
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-head">
          <img
            className="avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhhklLpQnJpmdcRWm07dxiiIp22D9ZaFlhzNF5S7EMPxEinocq&usqp=CAU"
            alt="Username"
          />
        </div>
        <div className="card-body">
          <div>
            <span className="Student-name">
              {contact.Name} <b>{contact.LastName || ""}</b>
              <span className="badge">PRO</span>
            </span>
            <span className="username">{contact.Email}</span>
          </div>
          <div className="student-infos">
            <span className="Student-description">
              <p>{contact.PhoneNumber}</p>
            </span>
            <div className="bnt-card">
              <Link to={`/editContact/${contact._id}`}>
                <EditIcon onClick={() => dispatch(getContact(contact._id))} />
              </Link>
              <DeleteIcon onClick={handleDelete} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

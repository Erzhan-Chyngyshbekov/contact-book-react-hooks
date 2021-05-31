import React, { useContext } from "react";
import classes from "../form.module.css";
import cancelImg from "../../assets/icons/cancel.png";
import editImg from "../../assets/icons/pencil.png";
import { contactBookContext } from "../../ContactBookContext";

function ContactItem(props) {
  const { fullName, email, phoneNumber, id } = props.data;

  const { deleteContact, changeEditId } = useContext(contactBookContext);

  const handleDelete = () => {
    //call function to delete item (from context)
    deleteContact(id);
  };

  return (
    <li>
      <h2> {fullName} </h2>
      <p> {email} </p>
      <p> {phoneNumber} </p>
      <img
        onClick={() => changeEditId(id)}
        className={classes.editIcon}
        src={editImg}
        alt="edit-img"
      />
      <img
        onClick={handleDelete}
        className={classes.cancelIcon}
        src={cancelImg}
        alt="cancel-img"
      />
    </li>
  );
}

export default ContactItem;

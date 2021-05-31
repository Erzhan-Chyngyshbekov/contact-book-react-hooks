import React, { useContext, useState } from "react";
import { contactBookContext } from "../../ContactBookContext";
import classes from "../form.module.css";

function EditContact(props) {
  const {
    fullName: contactFullName,
    email: contactEmail,
    phoneNumber: contactPhoneNumber,
    id,
  } = props.data;

  const { changeContact } = useContext(contactBookContext);

  const [fullName, setFullName] = useState(contactFullName);

  const [email, setEmail] = useState(contactEmail);

  const [phoneNumber, setPhoneNumber] = useState(contactPhoneNumber);

  const handleEdit = (e) => {
    e.preventDefault();

    changeContact(id, fullName, email, phoneNumber);
  };

  return (
    <div className={classes.modal}>
      <div className={classes.modal_dialog}>
        <div className={classes.modal_header}>
          <h3 className={classes.modal_title}>Update Form</h3>
        </div>
        <div className={classes.modal_body}>
          <form onSubmit={handleEdit} className={classes.modal_content}>
            <input
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              type="text"
              name="fullName"
              required
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              required
            />
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              type="text"
              name="phoneNumber"
              required
            />
            <button>OK</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditContact;

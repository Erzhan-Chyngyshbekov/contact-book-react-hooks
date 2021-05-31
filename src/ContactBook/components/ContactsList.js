import React, { useContext, useEffect, useState } from "react";
import classes from "../form.module.css";
import EditContact from "./EditContact";
import ContactItem from "./ContactItem";
import { contactBookContext } from "../../ContactBookContext";

function ContacstList() {
  const { contactsList, fetchContacts, editId } =
    useContext(contactBookContext);

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <ul className={classes.contactsList}>
      <h1>Contact List</h1>
      {contactsList.map((contact) =>
        contact.id === editId ? (
          <EditContact data={contact} ket={contact.id} />
        ) : (
          <ContactItem data={contact} ket={contact.id} />
        )
      )}
    </ul>
  );
}

export default ContacstList;

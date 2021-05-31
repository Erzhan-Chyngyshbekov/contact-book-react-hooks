import React, { useContext, useState } from "react";
import { contactBookContext } from "../../ContactBookContext";
import classes from "../form.module.css";

export default function Form() {
  const { createContact } = useContext(contactBookContext);

  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      fullName,
      email,
      phoneNumber,
    };
    createContact(data);

    setFullName("");
    setEmail("");
    setPhoneNumber("");
  };

  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h1>Contact Form</h1>
        <input
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          placeholder="Full Name"
          name="fullName"
          type="text"
          required
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          name="email"
          type="email"
          required
        />
        <input
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
          placeholder="Phone Number"
          name="phoneNumber"
          type="text"
          required
        />
        <button>Save</button>
      </form>
    </div>
  );
}

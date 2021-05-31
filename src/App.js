import React from "react";
import ContactBook from "./ContactBook";
import ContactBookContextProvider from "./ContactBookContext";

export default function App() {
  return (
    <div>
      <ContactBookContextProvider>
        <ContactBook />
      </ContactBookContextProvider>
    </div>
  );
}

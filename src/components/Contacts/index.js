import { useState, useEffect } from "react";

import List from "./List";
import Form from "./Form";
import "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "mehmet",
      phone_number: 123456,
    },
    {
      fullname: "burak",
      phone_number: 123456789,
    },
    {
      fullname: "furkan",
      phone_number: 1010,
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;

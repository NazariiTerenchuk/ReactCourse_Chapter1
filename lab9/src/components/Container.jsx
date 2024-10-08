import React, { useState } from "react";
import AddContactComponent from "./AddContactComponent";
import ContactList from "./ContactList";
import "../style.css";

function Container() {
  const [contacts, setContacts] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleEditContact = (id, updatedContact) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === id ? updatedContact : contact
      )
    );
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.firstName.toLowerCase().includes(searchItem.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search contacts..."
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <AddContactComponent onAddContact={handleAddContact} />
      <ContactList
        contacts={filteredContacts}
        onEdit={handleEditContact}
        onDelete={handleDeleteContact}
      />
    </>
  );
}

export default Container;

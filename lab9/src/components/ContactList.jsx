import React, { useState } from "react";

const ContactList = ({ contacts, onEdit, onDelete }) => {
  const [editingId, setEditingId] = useState(null);
  const [updatedContact, setUpdatedContact] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [editErrors, setEditErrors] = useState({});

  const handleEdit = (id) => {
    const contactToEdit = contacts.find((contact) => contact.id === id);
    setUpdatedContact(contactToEdit);
    setEditingId(id);
  };

  const handleUpdate = (id) => {
    const newErrors = {};
    if (!updatedContact.firstName.trim()) {
      newErrors.firstName = "The first name is required";
    }
    if (!updatedContact.lastName.trim()) {
      newErrors.lastName = "The last name is required";
    }
    if (!updatedContact.phone.trim()) {
      newErrors.phone = "The phone number is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setEditErrors(newErrors);
      return;
    }

    onEdit(id, { ...updatedContact });
    setEditingId(null);
    setUpdatedContact({ firstName: "", lastName: "", phone: "" });
    setEditErrors({});
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.length === 0 ? (
          <tr>
            <td colSpan="5">No data to display</td>
          </tr>
        ) : (
          contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              {editingId === contact.id ? (
                <>
                  <td>
                    <input
                      type="text"
                      value={updatedContact.firstName}
                      onChange={(e) =>
                        setUpdatedContact({
                          ...updatedContact,
                          firstName: e.target.value,
                        })
                      }
                    />
                    {editErrors.firstName && (
                      <p style={{ color: "red" }}>{editErrors.firstName}</p>
                    )}
                  </td>
                  <td>
                    <input
                      type="text"
                      value={updatedContact.lastName}
                      onChange={(e) =>
                        setUpdatedContact({
                          ...updatedContact,
                          lastName: e.target.value,
                        })
                      }
                    />
                    {editErrors.lastName && (
                      <p style={{ color: "red" }}>{editErrors.lastName}</p>
                    )}
                  </td>
                  <td>
                    <input
                      type="text"
                      value={updatedContact.phone}
                      onChange={(e) =>
                        setUpdatedContact({
                          ...updatedContact,
                          phone: e.target.value,
                        })
                      }
                    />
                    {editErrors.phone && (
                      <p style={{ color: "red" }}>{editErrors.phone}</p>
                    )}
                  </td>
                  <td>
                    <button onClick={() => handleUpdate(contact.id)}>
                      Save
                    </button>
                    <button onClick={() => setEditingId(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{contact.firstName}</td>
                  <td>{contact.lastName}</td>
                  <td>{contact.phone}</td>
                  <td>
                    <button onClick={() => handleEdit(contact.id)}>Edit</button>
                    <button onClick={() => onDelete(contact.id)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default ContactList;

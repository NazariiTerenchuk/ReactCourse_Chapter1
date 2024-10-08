import React, { useState } from "react";

function AddContactComponent({ onAddContact }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = "The first name is required";
    }
    if (!lastName.trim()) {
      newErrors.lastName = "The last name is required";
    }
    if (!phone.trim()) {
      newErrors.phone = "The phone number is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newContact = {
      id: Math.random(),
      firstName,
      lastName,
      phone,
    };

    onAddContact(newContact);
    setFirstName("");
    setLastName("");
    setPhone("");
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}

      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}

      <button type="submit">Add Contact</button>
    </form>
  );
}

export default AddContactComponent;

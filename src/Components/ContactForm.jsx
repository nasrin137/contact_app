import React, { useState, useEffect } from 'react';

function ContactForm({ addOrEditContact, editContact }) {
  const [contact, setContact] = useState({ name: '', phone: '', email: '' });

  useEffect(() => {
    if (editContact) {
      setContact(editContact);
    }
  }, [editContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.name && contact.phone && contact.email) {
      addOrEditContact(contact);
      setContact({ name: '', phone: '', email: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={contact.name}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={contact.phone}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={contact.email}
        onChange={handleChange}
        required
      />
      <button type="submit">{editContact ? 'Update' : 'Add'} Contact</button>
    </form>
  );
}

export default ContactForm;

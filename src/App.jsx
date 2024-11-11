import { useState } from 'react';
import ContactList from './Components/ContactList';
import ContactForm from './Components/ContactForm';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const addOrEditContact = (contact) => {
    if (editContact) {
      setContacts(contacts.map((c) => (c.id === contact.id ? contact : c)));
      setEditContact(null);
    } else {
      setContacts([...contacts, { ...contact, id: Date.now() }]);
    }
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleEdit = (contact) => {
    setEditContact(contact);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Contact Management App</h1>
      <ContactForm addOrEditContact={addOrEditContact} editContact={editContact} />
      <input
        type="text"
        placeholder="Search by name..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} onEdit={handleEdit} />
    </div>
  );
}

export default App;

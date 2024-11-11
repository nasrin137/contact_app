
import ContactItem from './ContactItem';

function ContactList({ contacts, onDelete, onEdit }) {
  return (
    <div>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      ) : (
        <p>No contacts available</p>
      )}
    </div>
  );
}

export default ContactList;

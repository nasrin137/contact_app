function ContactItem({ contact, onDelete, onEdit }) {
  return (
    <div className="contact-item">
      <div>
        <h3>{contact.name}</h3>
        <p>Phone: {contact.phone}</p>
        <p>Email: {contact.email}</p>
      </div>
      <div>
        <button className="edit-button" onClick={() => onEdit(contact)}>Edit</button>
        <button className="delete-button" onClick={() => onDelete(contact.id)}>Delete</button>
      </div>
    </div>
  );
}

export default ContactItem;


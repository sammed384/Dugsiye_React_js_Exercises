import ContactItem from "./ContactItem";

const ContactList = ({ contacts, dispatch, setEditing }) => {
  return (
    <div>
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              dispatch={dispatch}
              setEditing={setEditing}
            />
          ))}
        </ul>
      ) : (
        <p>No contact available.</p>
      )}
    </div>
  );
};

export default ContactList;

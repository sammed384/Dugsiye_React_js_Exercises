const ContactItem = ({ contact, dispatch, setEditing }) => {
  const { id, name, email, phone, favorite } = contact;
  return (
    <li style={{ marginBottom: "8px" }}>
      <strong>{name}</strong>
      {favorite && "★"}
      <p>Email:{email}</p>
      <p>Phone:{phone}</p>
      <button
        onClick={() => dispatch({ type: "toggleFavorite", payload: id })}
      >
        {favorite ? "Unfavorite" : "favorite"}
      </button>
      <button onClick={() => setEditing(contact)}>Edit</button>
      <button onClick={() => dispatch({ type: "delete", payload: id })}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ContactForm = ({ dispatch, editing, setEditing }) => {
  const [contact, setContact] = useState(
    editing || { id: null, name: "", email: "", phone: "" }
  );
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    if (editing) {
      setContact(editing);
      setIsEditing(true);
    }
  }, [editing]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.name && contact.email && contact.phone) {
      if (isEditing) {
        dispatch({ type: "edit", payload: contact });
        setIsEditing(false);
      } else {
        dispatch({
          type: "add",
          payload: { ...contact, id: crypto.randomUUID(), favorite: false },
        });
      }
      setContact({ id: null, name: "", email: "", phone: "" });
      setEditing(null);
    }
  };
  const handleCancelEdit = () => {
    setContact({ id: null, name: "", email: "", phone: "" });
    setIsEditing(false);
    setEditing(null);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>{isEditing ? "Edit Contact" : "Add New Contact"}</h2>

        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={contact.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={contact.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={contact.phone}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <button type="submit">{isEditing ? "Update" : "Add"}</button>
        {isEditing && <button onClick={handleCancelEdit}>Cancel</button>}
      </form>
    </div>
  );
};

export default ContactForm;

import { useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const ContactApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editing, setEditing] = useState(null);
  return (
    <div>
      <h1>Contact Management App</h1>
      <ContactForm
        dispatch={dispatch}
        editing={editing}
        setEditing={setEditing}
      />
      <ContactList
        contacts={state}
        dispatch={dispatch}
        setEditing={setEditing}
      />
    </div>
  );
};

export default ContactApp;

import { useReducer } from "react";

const initialState = {
  step: 1,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "PREV_STEP":
      return { ...state, step: state.step - 1 };
    case "RESET_FORM":
      return  initialState ;
    default:
      return state;
  }
};

const MultiStepForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const nextStep = () => {
    dispatch({
      type: "NEXT_STEP",
    });
  };
  const prevStep = () => {
    dispatch({
      type: "PREV_STEP",
    });
  };
  const resetForm = () => {
    dispatch({
      type: "RESET_FORM",
    });
  };
  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      value: e.target.value,
      field: e.target.name,
    });
  };
  const handleSubmite = () => {
    alert("Form Submitted successfully");
    resetForm();
  };

  return (
    <div>
      <h2>Multi-Step Registration</h2>
      {state.step === 1 && (
        <div>
          <h3>Step 1: Profile</h3>
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={state.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              value={state.lastName}
              onChange={handleChange}
              name="lastName"
            />
          </div>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {state.step === 2 && (
        <div>
          <h3>Step 2: Contact</h3>
          <div>
            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Phone: </label>
            <input
              type="tel"
              value={state.phone}
              onChange={handleChange}
              name="phone"
            />
          </div>
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {state.step === 3 && (
        <div>
          <h3>Step 3: Review</h3>
          <p style={{ fontWeight: "bold", display: "inline-block" }}>
            First Name:
          </p>
          <span> {state.firstName}</span> <br />
          <p style={{ fontWeight: "bold", display: "inline-block" }}>
            Last Name:
          </p>
          <span> {state.lastName}</span>
          <br />
          <p style={{ fontWeight: "bold", display: "inline-block" }}>Email:</p>
          <span> {state.email}</span> <br />
          <p style={{ fontWeight: "bold", display: "inline-block" }}>Phone:</p>
          <span> {state.phone}</span> <br />
          <button onClick={prevStep}>Back</button>
          <button onClick={handleSubmite}>Confirm</button>
        </div>
      )}
      {state.step > 3 && (
        <div>
          <h3>Form Completed</h3>
          <button onClick={resetForm}>Start Over</button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;

import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    option: "",
    isChecked: false,
  });
  const [submitData, setSubmitData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({ ...prev, isChecked: e.target.checked }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitData(formData);
    console.log("Submitted Data:", formData);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-4 flex flex-col max-w-md space-y-4 mx-auto"
      >
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            placeholder="Enter Username"
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter Email"
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />
        </label>
        <label>
          Checkbox:
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={formData.isChecked}
          />
        </label>
        <label>
          Select Option :
          <select value={formData.option} name="option" onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="option1">option 1</option>
            <option value="option2">option 2</option>
          </select>
        </label>
        <button
          className="bg-blue-500 text-white rounded p-2"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default App;

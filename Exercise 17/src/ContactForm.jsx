import useForm from "./useForm";

const ContactForm = () => {
  const { val, handleChange } = useForm({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data", val);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input
              type="text"
              name="firstname"
              value={val.firstname}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={val.name}
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
              value={val.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea
              name="message"
              value={val.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;

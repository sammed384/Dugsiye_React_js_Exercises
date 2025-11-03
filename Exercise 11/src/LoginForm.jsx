import { useState } from "react";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [islogin, setIslogin] = useState(false);

  const handlelogin = (e) => {
    e.preventDefault();
    if (name && password) {
      setIslogin(true);
    }
  };
  const handlelogout = () => {
    setName("");
    setPassword("");
    setIslogin(false);
  };
  const handlechange = (e) => {
    setName(e.target.value);
  };
  const handlechangepassword = (e) => {
    setPassword(e.target.value);
  };
  if (islogin) {
    return (
      <>
        <h2>Welcome {name}</h2>
        <button onClick={handlelogout}>Logout</button>
      </>
    );
  }
  return (
    <div>
      <form onSubmit={handlelogin}>
        <h3>Login</h3>
        <div>
          <label>Username </label>
          <input type="text" value={name} required onChange={handlechange} />
        </div>
        <div>
          <label>Password </label>
          <input
            type="password"
            value={password}
            required
            onChange={handlechangepassword}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;

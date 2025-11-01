import { useEffect } from "react";
import { useState } from "react";

const GreetingTitle = () => {
  const [greeting, setGreeting] = useState("hello");
  const [name, setName] = useState("");

  useEffect(() => {
    !name
      ? (document.title = "Welcome!")
      : (document.title = `${greeting}, ${name}`);
  }, [greeting, name]);
  return (
    <div>
      <h1>Enter your name</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>Choosing a greeting:</h1>
      <input
        type="text"
        value={greeting}
        onChange={(e) => setGreeting(e.target.value)}
      />
    </div>
  );
};

export default GreetingTitle;

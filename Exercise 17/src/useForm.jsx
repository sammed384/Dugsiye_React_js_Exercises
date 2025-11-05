import { useState } from "react";

const useForm = (i) => {
  const [val, setVal] = useState(i);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  };
  return { val, handleChange };
};

export default useForm;

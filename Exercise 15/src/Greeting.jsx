import { useContext } from "react";
import LanguageContext from "./LanguageContext";

const Greeting = () => {
  const language = useContext(LanguageContext);
  const greats = {
    en: "Hello",
    es: "Hola",
  };
  return <h2>{greats[language]}</h2>;
};

export default Greeting;

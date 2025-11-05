import { useState } from "react";
import LanguageContext from "./LanguageContext";
import Greeting from "./Greeting";

function App() {
  const [language, setLanguage] = useState("en");
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider value={language}>
      <button onClick={toggleLanguage}>
        Switch to {language === "en" ? "Spanish" : "English"}
      </button>
      <Greeting />
    </LanguageContext.Provider>
  );
}

export default App;

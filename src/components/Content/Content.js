import { useContext } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PassphraseProvider } from "./../PassphraseForm";
import MainContent from "./MainContent";

const Content = () => {
  const { isAuthenticated } = useContext(PassphraseProvider);

  const handleFurtherButton = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {isAuthenticated && <MainContent handleClick={handleFurtherButton} />}
    </div>
  );
};

export default Content;

import { useContext } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PassphraseProvider } from "./../PassphraseForm";
import MainContent from "./MainContent";
import AlertContent from "./AlertContent";

const Content = () => {
  const { isAuthenticated } = useContext(PassphraseProvider);

  const handleBackButton = (e) => {
    e.preventDefault();
  };

  const handleFurtherButton = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {isAuthenticated ? (
        <MainContent handleClick={handleFurtherButton} />
      ) : (
        <AlertContent handleClick={handleBackButton} />
      )}
    </div>
  );
};

export default Content;

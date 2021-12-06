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

  return (
    <div className="content--div">
      {isAuthenticated ? (
        <MainContent />
      ) : (
        <AlertContent handleClick={handleBackButton} />
      )}
    </div>
  );
};

export default Content;

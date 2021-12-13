import { useState } from "react";

import { Provider, Form } from ".";
import Content from "./../Content";

const PassphraseForm = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const formSubmit = (password) => {
    if (password === "iwanttoseethebaby") {
      return setIsAuthenticated(true);
    } else {
      alert(
        `You don't need to be on this site. You can go about your business.`
      );
    }
  };

  return (
    <Provider value={{ isAuthenticated: true }}>
      {isAuthenticated ? children : <Form onFormSubmit={formSubmit} />}
    </Provider>
  );
};

PassphraseForm.Content = Content;

export default PassphraseForm;

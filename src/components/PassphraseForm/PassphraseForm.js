import { useState } from "react";

import { Provider, Form } from ".";
import { checkIfTrue } from "./../../utils/functions";
import Content from "./../Content";

const PassphraseForm = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const formSubmit = (password) => {
    const result = checkIfTrue(password);
    setIsAuthenticated(result);
  };

  return (
    <Provider value={{ isAuthenticated: true }}>
      {isAuthenticated ? children : <Form onFormSubmit={formSubmit} />}
    </Provider>
  );
};

PassphraseForm.Content = Content;

export default PassphraseForm;

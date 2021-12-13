import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import PassphraseForm from "./components/PassphraseForm";
import Main from "./components/Main";
import Movies from "./components/Movies";
import { Provider } from "./components/PassphraseForm";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route
          exact="true"
          path="/"
          element={
            <Provider value={{ isAuthenticated, setIsAuthenticated }}>
              {isAuthenticated ? <Main /> : <PassphraseForm />}
            </Provider>
          }
        />
        {/* <Route path="/places" element={<Places />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

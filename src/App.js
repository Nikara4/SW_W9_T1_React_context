import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import PassphraseForm from "./components/PassphraseForm";
import Main from "./components/Main";
import Movies from "./components/Movies";
import { Provider } from "./components/PassphraseForm";
import NavMenu from "./components/NavMenu";
import "./App.css";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <aside className="navbar">
        <NavMenu />
      </aside>
      <main className="main">
        <Routes>
          {/* <Route path="/places" element={<Places />} /> */}
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
        </Routes>
      </main>
    </BrowserRouter>
  );
}

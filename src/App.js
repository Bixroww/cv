import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
      {/* Les accents ne sont pas pris en comptes dans les url */}
      {/* dans le tuto = <Route> path="/xxxx" component={xxxxx}/> mais c'est pas à jour */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Competences" element={<Knowledges />} />
          <Route exact path="/Portfolio" elementt={<Portfolio />} />
          <Route exact path="/References" element={<Contact />} />
          <Route exact path="/NotFound" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

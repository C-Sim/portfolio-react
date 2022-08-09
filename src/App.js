import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AboutMe } from "./pages/AboutMe";
import { Portfolio } from "./pages/Portfolio";
import { CV } from "./pages/CV";
import { Contact } from "./pages/Contact";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

import { Routes, Route } from "react-router-dom";

import { AboutMe } from "./containers/AboutMe";
import { Portfolio } from "./containers/Portfolio";
import { CV } from "./containers/CV";
import { Contact } from "./containers/Contact";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<AboutMe />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/cv" element={<CV />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

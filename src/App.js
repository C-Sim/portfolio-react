import { BrowserRouter as Router } from "react-router-dom";
import Box from "@mui/material/Box";

import { AppRoutes } from "./AppRoutes";
import { NavBar } from "./components/organisms/NavBar";

export const App = () => {
  return (
    <Router>
      <NavBar
        navItems={[
          {
            label: "About Me",
            href: "/",
          },
          {
            label: "Portfolio",
            href: "/portfolio",
          },
          {
            label: "CV",
            href: "/cv",
          },
          {
            label: "Contact",
            href: "/contact",
          },
        ]}
      />
      <Box component="main" sx={{ marginTop: 18 }}>
        <AppRoutes />
      </Box>
    </Router>
  );
};

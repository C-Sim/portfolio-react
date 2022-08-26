import { BrowserRouter as Router } from "react-router-dom";
import Container from "@mui/material/Container";
import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
import { AppRoutes } from "./AppRoutes";
import { NavBar } from "./components/organisms/NavBar";
import { Footer } from "./components/organisms/Footer";
import Box from "@mui/material/Box";

export const App = () => {
  return (
    <Router>
      <Box
        // component="page"
        sx={{
          padding: 0,
          margin: 0,
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(
            to top,
            rgba(20, 20, 20, 0.2),
            rgba(255, 255, 255, 0.2)
          )`,
        }}
      >
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
        <Box className="main" sx={{ marginTop: 8, padding: 0 }}>
          <AppRoutes />
        </Box>
        <Footer
          footerItems={[
            {
              label: "LinkedIn",
              icon: LinkedIn,
              href: "https://www.linkedin.com/in/cherelle-simpson",
            },
            {
              label: "GitHub",
              icon: GitHub,
              href: "https://github.com/C-Sim",
            },
            {
              label: "Instagram",
              icon: Instagram,
              href: "https://www.instagram.com/cherelle.s/",
            },
          ]}
        />
      </Box>
    </Router>
  );
};

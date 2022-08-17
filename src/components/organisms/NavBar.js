import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { NavLink } from "react-router-dom";

export const NavBar = ({ navItems }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Cherelle Simpson
      </Typography>
      <Divider />

      <nav className="nav" sx={{ display: { xs: "none", sm: "block" } }}>
        {navItems.map((item) => (
          <NavLink
            to={item.href}
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            href={item.href}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }} component="header">
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#264653",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            href="/"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Cherelle Simpson
          </Typography>
          <Box className="nav" sx={{ display: isMobile ? "none" : "flex" }}>
            {navItems.map((item) => (
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                href={item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
            },
          }}
          anchor="top"
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

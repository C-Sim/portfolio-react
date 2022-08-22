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
import { Navigate, NavLink, useNavigate } from "react-router-dom";

export const NavBar = ({ navItems }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#4f6367ff" }}
    >
      <Typography
        variant="h6"
        sx={{ my: 2, fontWeight: 100, color: "#eef5dbff" }}
      >
        Cherelle Simpson
      </Typography>
      <Divider />

      <nav
        className="nav"
        sx={{ display: { xs: "none", sm: "block" }, fontWeight: 100 }}
      >
        {navItems.map((item) => (
          <NavLink
            to={item.href}
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            // onClick={() => {
            //   navigate(item.href, { replace: true });
            // }}
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
          backgroundColor: "#4f6367ff",
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
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "#eef5dbff",
              fontWeight: 100,
            }}
          >
            Cherelle Simpson
          </Typography>
          <Box
            className="nav"
            sx={{ display: isMobile ? "none" : "flex", fontWeight: 100 }}
          >
            {navItems.map((item) => (
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                // onClick={() => {
                //   navigate(item.href, { replace: true });
                // }}
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

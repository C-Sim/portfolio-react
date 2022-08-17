import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GitHubIcon } from "@mui/icons-material/GitHub";
import useMediaQuery from "@mui/material/useMediaQuery";
import { List } from "@mui/material";

export const Footer = ({ footerItems }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  //   const [mobileOpen, setMobileOpen] = useState(false);

  //   const handleDrawerToggle = () => {
  //     setMobileOpen(!mobileOpen);
  //   };

  //   const drawer = (
  //     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
  //       <Typography variant="h6" sx={{ my: "auto" }}>
  //         Contact Me
  //       </Typography>
  //       <Divider />
  //       <Box>
  //         {footerItems.map((item) => (
  //           <Link sx={{ textAlign: "center" }} href={item.href} target="_blank">
  //             <FontAwesomeIcon icon={item.icon} />
  //           </Link>
  //         ))}
  //       </Box>
  //     </Box>
  //   );

  return (
    <Box sx={{ display: "flex" }} component="footer-box">
      <Box
        component="footer"
        sx={{
          backgroundColor: "#264653",
        }}
      >
        <Toolbar>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton> */}
          <Box sx={{ textAlign: "center", width: "100vw" }}>
            {footerItems.map((item) => (
              <IconButton
                sx={{ textAlign: "center", color: "#fff" }}
                href={item.href}
                target="_blank"
              >
                <item.icon />
              </IconButton>
            ))}
          </Box>
        </Toolbar>
      </Box>
      {/* <Box component="nav">
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
      </Box> */}
    </Box>
  );
};

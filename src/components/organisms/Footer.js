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
import useMediaQuery from "@mui/material/useMediaQuery";
import { List } from "@mui/material";

export const Footer = ({ footerItems }) => {
  // const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ display: "flex" }} component="footer-box">
      <Box
        component="footer"
        sx={{
          backgroundColor: "#4f6367ff",
        }}
      >
        <Toolbar>
          <Box sx={{ textAlign: "center", width: "100vw" }}>
            {/* add key to every mapped item */}
            {footerItems.map((item) => (
              <IconButton
                sx={{
                  textAlign: "center",
                  color: "#c8c8c8",
                  pl: 4,
                  pr: 4,
                }}
                href={item.href}
                target="_blank"
                className="icon"
              >
                <item.icon />
              </IconButton>
            ))}
          </Box>
        </Toolbar>
      </Box>
    </Box>
  );
};

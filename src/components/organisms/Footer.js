import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";

export const Footer = ({ footerItems }) => {
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
            {footerItems.map((item) => (
              <IconButton
                sx={{
                  textAlign: "center",
                  color: "#c8c8c8",
                  pl: 4,
                  pr: 4,
                }}
                key={item.label}
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

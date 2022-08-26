import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import kinkakuji from "../components/atoms/images/Kinkakuji.jpg";
import me from "../components/atoms/images/CS.jpg";

import Box from "@mui/material/Box";
import { Divider, ImageListItemBar } from "@mui/material";

export const AboutMe = () => {
  return (
    <Box>
      <Box
        // container
        sx={{
          // minHeight: "90vh",
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${kinkakuji})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ImageListItemBar
          className="image-bar"
          title="Photo taken on my travels in Kyoto, Japan"
          sx={{
            textAlign: "right",
            fontSize: "8px",
            fontWeight: 100,
          }}
        />
      </Box>

      <Box sx={{ mb: 4, width: "100vw", margin: 0 }}>
        <Grid container spacing={4} sx={{ mb: 4, marginLeft: 0 }}>
          <Grid item xs={12} sm={3} md={3} sx={{ mt: 6, ml: 4 }}>
            <img src={me} width="148px" className="me" />
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <Box
              align="center"
              sx={{
                marginTop: 8,
                padding: 1,
                // backgroundColor: "#c8c8c8",
                // opacity: 0.2,
                borderColor: "#eef5dbff",
              }}
            >
              <Typography sx={{ mb: 2, color: "#4f6367ff", fontWeight: 100 }}>
                An established business professional with extensive experience
                in management roles within large and reputable companies.
              </Typography>

              <Divider />

              <Typography
                sx={{ mt: 2, mb: 2, color: "#4f6367ff", fontWeight: 100 }}
              >
                Passionate about merging logic with creativity to create
                functional and aesthetically pleasing outputs.
              </Typography>

              <Divider />

              <Typography
                sx={{ mt: 2, mb: 2, color: "#4f6367ff", fontWeight: 100 }}
              >
                {" "}
                Naturally creative and an adept problem-solver with proficiency
                in a wide range of coding languages and skills.
              </Typography>

              <Divider />

              <Typography
                align="center"
                sx={{
                  mt: 2,
                  color: "#4f6367ff",
                  fontWeight: 100,
                  fontSize: 12,
                }}
              >
                Find more detail{" "}
                <a
                  sx={{
                    textDecoration: "none",
                    color: "#d5bb64",
                    fontWeight: 100,
                  }}
                  href="/cv"
                >
                  here
                </a>
                .
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

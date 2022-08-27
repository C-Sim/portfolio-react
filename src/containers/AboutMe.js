import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import kinkakuji from "../components/atoms/images/Kinkakuji.jpg";
import me from "../components/atoms/images/CS.jpg";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import useMediaQuery from "@mui/material/useMediaQuery";

export const AboutMe = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

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
          subtitle="Photo taken on my travels in Kyoto, Japan"
          sx={{
            textAlign: "right",
            fontSize: "8px",
            fontWeight: 100,
            backgroundColor: "rgb(79, 99, 103, 0)",
            fontStyle: "italic",
          }}
        />
      </Box>

      <Box sx={{ mb: 4, width: "100vw", margin: 0 }}>
        <Grid
          container
          // spacing={4}
          sx={{
            mb: 4,
            ml: 0,
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Grid
            item
            className="about-container"
            xs={12}
            sm={3}
            md={3}
            sx={{ mt: 6, pl: 0, ml: isMobile ? 0 : 4 }}
          >
            <img src={me} width="148px" className="me" />
          </Grid>
          <Grid item xs={10} sm={8} md={8}>
            <Box
              align="center"
              sx={{
                mt: isMobile ? 1 : 8,
                padding: 1,
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
                functional apps, intuitive APIs and aesthetic interfaces.
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
                  fontSize: 14,
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

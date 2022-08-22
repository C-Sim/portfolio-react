import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

export const AboutMe = () => {
  return (
    <Box>
      <Box container sx={{ minHeight: "90vh" }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url("../images/Kinkakuji.jpg")`,
            // backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Box>

      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={4} md={4}>
          <img src="../images/CS.jpg" />
        </Grid>

        <Grid item xs={12} sm={8} md={8}>
          <Typography sx={{ mb: 4, color: "#eef5dbff", fontWeight: 100 }}>
            An established business professional with extensive experience in
            management roles within large and reputable companies.
          </Typography>

          <Typography sx={{ mb: 4, color: "#eef5dbff", fontWeight: 100 }}>
            Passionate about merging logic with creativity to create functional
            and aesthetically pleasing outputs.
          </Typography>

          <Typography sx={{ color: "#eef5dbff", fontWeight: 100 }}>
            {" "}
            Naturally creative and an adept problem-solver with proficiency in a
            wide range of coding languages and skills. Find more detail{" "}
            <a
              sx={{
                textDecoration: "none",
                color: "#d5bb64",
                fontWeight: 100,
              }}
              href="/cv"
            >
              here.
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

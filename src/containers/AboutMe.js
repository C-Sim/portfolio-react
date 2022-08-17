import Box from "@mui/material/Box";

export const AboutMe = () => {
  return (
    <Box container sx={{ minHeight: "100vh" }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundImage: `url("../components/atoms/Kinkakuji.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
    </Box>
  );
};

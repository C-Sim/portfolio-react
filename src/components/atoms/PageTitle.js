import Typography from "@mui/material/Typography";

export const PageTitle = ({ title }) => {
  return (
    <Typography
      variant="h1"
      component="div"
      gutterBottom
      align="center"
      sx={{ p: 4 }}
    >
      {title}
    </Typography>
  );
};

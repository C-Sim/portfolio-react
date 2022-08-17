import { useState } from "react";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import FormHelperText from "@mui/material/FormHelperText";

import { PageTitle } from "../components/atoms/PageTitle";
import {
  CheckCircleOutlineOutlined,
  ChevronLeftOutlined,
} from "@mui/icons-material";

export const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });
  const isMobile = useMediaQuery("(max-width:900px)");

  const onSubmit = (data) => {
    // mailtoc.s
    console.log(data);
  };

  return (
    <Paper sx={{ p: 3, minWidth: isMobile ? "90%" : "400px" }} elevation={6}>
      <Typography component="h1" variant="h4" align="center">
        Contact Me
      </Typography>
      <Divider />
      <Stack
        component="form"
        sx={{ p: 3 }}
        spacing={4}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack spacing={2}>
          <TextField
            error={!!errors.name}
            label="Name"
            variant="outlined"
            helperText={!!errors.name ? "Please enter a valid name." : ""}
            {...register("name", {
              required: true,
            })}
          />

          <TextField
            error={!!errors.email}
            label="Email"
            variant="outlined"
            helperText={!!errors.email ? "Please enter a valid email." : ""}
            {...register("email", {
              required: true,
            })}
          />

          <TextareaAutosize
            error={!!errors.message}
            placeholder="Message"
            aria-label="minimum height"
            minRows={3}
            variant="outlined"
            helperText={!!errors.message ? "Please enter a valid message." : ""}
            {...register("message", {
              required: true,
            })}
          />
        </Stack>
        <Stack spacing={2}>
          <Button variant="contained" type="submit">
            Send Message
          </Button>
          <Typography
            variant="caption"
            component="div"
            sx={{ color: "red" }}
            align="center"
          >
            Failed to send message. Please try again.
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

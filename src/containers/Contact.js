import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import emailjs from "@emailjs/browser";

export const Contact = ({ isMobile }) => {
  const form = useRef();

  const [open, setOpen] = useState(false);

  const [emailError, setEmailError] = useState();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  // const isMobile = useMediaQuery("(max-width:900px)");

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);

    // setValues({ name: "", email: "", message: "" });
  };

  const onSubmit = () => {
    emailjs
      .sendForm(
        "service_doq4yxc",
        "template_3zqd709",
        form.current,
        "ulS302XN5UlvLfEvu"
      )
      .then(
        (result) => {
          // fix
          // setValues({ name: "", email: "", message: "" });

          handleOpenModal();
        },
        (error) => {
          setEmailError(true);
        }
      );
  };

  return (
    <Paper
      sx={{ p: 3, m: 4, mb: 6, minWidth: isMobile ? "90%" : "400px" }}
      elevation={6}
    >
      <Dialog open={open} onClose={handleCloseModal}>
        <DialogTitle>Message sent.</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thanks for getting in touch...I'll respond as soon as I can!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>OK</Button>
        </DialogActions>
      </Dialog>

      <Typography
        component="h1"
        variant="h4"
        align="center"
        sx={{ fontWeight: 200, color: "#4f6367ff" }}
      >
        Contact Me
      </Typography>

      <Typography
        align="center"
        sx={{ p: 3, fontWeight: 100, color: "#4f6367ff" }}
      >
        Send me a message using the form below
      </Typography>

      <Divider />

      <Stack
        component="form"
        sx={{ p: 3 }}
        spacing={4}
        onSubmit={handleSubmit(onSubmit)}
        ref={form}
      >
        <Stack spacing={2}>
          <TextField
            error={!!errors.name}
            label="Name"
            variant="outlined"
            helperText={!!errors.name ? "Please enter a valid name." : ""}
            {...register("from_name", {
              required: true,
            })}
          />

          <TextField
            error={!!errors.email}
            label="Email"
            type="email"
            variant="outlined"
            helperText={!!errors.email ? "Please enter a valid email." : ""}
            {...register("reply_to", {
              required: true,
            })}
          />

          <TextField
            error={!!errors.message}
            label="Message"
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
          <Button
            className="button"
            variant="contained"
            type="submit"
            sx={{
              fontWeight: 100,
              backgroundColor: "#4f6367ff",
              color: "#eef5dbff",
              "&:hover": { backgroundColor: "#4f6367ff" },
            }}
          >
            Send Message
          </Button>

          {emailError && (
            <Typography
              variant="caption"
              component="div"
              sx={{ color: "red" }}
              align="center"
            >
              Failed to send message. Please try again.
            </Typography>
          )}
        </Stack>
      </Stack>
    </Paper>
  );
};

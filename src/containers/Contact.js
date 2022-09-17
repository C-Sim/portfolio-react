import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
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

import { PageTitle } from "../components/atoms/PageTitle";

export const Contact = () => {
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

  const isMobile = useMediaQuery("(max-width:600px)");

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
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
          handleOpenModal();
        },
        (error) => {
          setEmailError(true);
        }
      );
  };

  return (
    <Paper
      sx={{ p: isMobile ? 2 : 3, m: 4, minWidth: isMobile ? "80%" : "90%" }}
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

      <PageTitle title="Contact me" />

      <Typography
        align="center"
        sx={{ p: 3, pt: 1, fontWeight: 100, color: "#4f6367ff" }}
      >
        Send me a message using the form or contact me via the links in the
        footer.
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
            error={!!errors.from_name}
            label="Name"
            variant="outlined"
            helperText={!!errors.from_name ? "Please enter a valid name." : ""}
            {...register("from_name", {
              required: true,
            })}
          />

          <TextField
            error={!!errors.reply_to}
            label="Email"
            type="email"
            variant="outlined"
            helperText={!!errors.reply_to ? "Please enter a valid email." : ""}
            {...register("reply_to", {
              required: true,
            })}
          />

          <TextField
            error={!!errors.message}
            label="Message"
            aria-label="minimum height"
            multiline
            minRows={4}
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

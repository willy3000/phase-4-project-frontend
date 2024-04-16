import React from "react";
import { Box, TextField } from "@mui/material";

export default function HealthcareSignup() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        width: "100%",
      }}
    >
      <TextField label="Healthcare Provider" />
      <TextField label="contact" />
      <TextField label="password" />
      <TextField label="confirm password" />
    </Box>
  );
}

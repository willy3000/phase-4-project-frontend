import React from "react";
import { Box, TextField } from "@mui/material";

export default function UserSignup() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        width: "100%",
      }}
    >
      <TextField label="username" fullWidth />
      <TextField label="phone number" />
      <TextField label="password" />
      <TextField label="confirm password" />
    </Box>
  );
}

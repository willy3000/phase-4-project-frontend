import React, { useState } from "react";
import { Box, Tabs, Tab, Paper, Button, Typography } from "@mui/material";
import UserSignup from "../components/signup/user-signup";
import HealthcareSignup from "../components/signup/healthcare-signup";

export default function SignUp() {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (e, value) => {
    console.log(value);
    setTabValue(value);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center ",
      }}
    >
      <Paper
        sx={{
          marginTop: "25px",
          padding: "45px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        elevation={24}
      >
        <img src="/assets/logo.png" alt="" width={250} />
        <Tabs value={tabValue} onChange={handleChange} sx={{ padding: "15px" }}>
          <Tab label="User" />
          <Tab label="Healthcare Provider" />
        </Tabs>
        {tabValue === 0 ? <UserSignup /> : <HealthcareSignup />}
        <Button variant="contained" sx={{ margin: "15px" }}>
          Sign Up
        </Button>
        <Typography variant="caption" sx={{fontSize: '12px'}}>
          Already have an account? <a href="">log in</a>
        </Typography>
      </Paper>
    </Box>
  );
}

import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Header from "../componants/Header";

const Login = () => {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Header />
      <Typography>
        Mobile:{mobile},Password:{password}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
        <Paper
          sx={{
            width: "600px",
            mt: "10px",
            textAlign: "center",
            padding: "30px 0px 30px 0",
          }}
          elevation={24}
        >
          <Typography variant="h3">Login Area</Typography>
          <br />
          <input
            type="text"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
            placeholder="Mobile"
          />
          <br />
          <br />
          <input
            type="password" 
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Your Password"
          />
          <br />
          <br />
          <Button variant="contained" sx={{ mr: "10px" }}>
            Login
          </Button>
          <Button variant="outlined" onClick={() => navigate("/signup")}>
            SignUp
          </Button>
          <br />
          <span onClick={()=>{setMobile("");setPassword("")}}>Reset</span>
        </Paper>
      </Box>
    </>
  );
};

export default Login;

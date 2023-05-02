import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../componants/Header";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [count, setCount] = useState("Counter");
  return (
    <>
      <Header />
      <Box sx={{ textAlign: "center", mt: "30px" }}>
        <Typography>
          Name : {name}, Mobile : {mobile}, Pasword : {password},
          Confirm-Password: {cpassword}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
        <Paper
          sx={{
            width: "600px",
            mt: "10px",
            textAlign: "center",
            padding: "30px 0px 30px 0px",
          }}
          elevation={24}
        >
          <Typography variant="h3">Register Account</Typography>
          <br />
          <input
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            placeholder="Full Name"
          />
          <br />
          <br />
          <input
            type="text"
            value={mobile}
            placeholder="Mobile Number"
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="password"
            value={cpassword}
            placeholder="Confirm Password"
            onChange={(e) => {
              setCpassword(e.target.value);
            }}
          />
          <br />
          <br />
          <Button variant="contained" sx={{ mr: "10px" }}>
            Register
          </Button>
          <Button variant="outlined" onClick={() => navigate("/login")}>
            Login
          </Button>
          <br />
          <span onClick={()=>{
            setName("");
            setMobile("");
            setPassword("");
            setCpassword("");
          }}>Reset</span>
          {/* <Button variant="contained" sx={{mr:'10px'}} onClick={()=>{
                if(count=='Counter'){
                    setCount(0)
                }
                else{
                    setCount(count+1)
                }
            }}>{count}</Button> */}
        </Paper>
      </Box>
    </>
  );
};

export default Signup;

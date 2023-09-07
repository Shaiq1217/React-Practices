import { Container, CssBaseline, Box, TextField } from "@mui/material";
import Button from "../../components/commons/button/button";
import styles from "./login.module.css";
import gslogo from "../../assets/gslogo.png";
import { useState, useEffect } from "react";

const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  useEffect(() => {
    console.log(email, password);
  }, []);
  return (
    <>
      <CssBaseline />
      <Container
        component="main"
        maxWidth="xs"
        style={{
          border: "1px solid red",
          borderRadius: "0 10%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "7rem",
          minHeight: "70vh", // Set the container to 100% viewport height
          minWidth: "10vw",
        }}
      >
        <Box
          component="form"
          noValidate
          autoComplete="off"
          display="flex"
          flexDirection="column" // Stack elements vertically
          alignItems="center" // Center elements horizontally
          sx={{ gap: 1 }} // Add spacing between child elements
        >
          <img src={gslogo} alt="GoSaaS logo" />
          <TextField
            id="Email"
            label="Email"
            variant="standard"
            fullWidth
            value={email}
            onChange={(e) => {
              // Validate email format
              setEmail(e.target.value);
              const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailPattern.test(e.target.value)) {
                setEmailError("Invalid email format");
              } else {
                setEmailError("");
              }
            }}
            error={!!emailError}
            helperText={emailError}
          />
          <TextField
            id="Password"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            fullWidth
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value.length <= 8) {
                setPasswordError("Password must be at least 8 characters");
              } else {
                setPasswordError("");
              }
            }}
            error={!!passwordError}
            helperText={passwordError}
          />
          <div className={styles.seperation}>
            {" "}
            <Button
              text={"Sign In"}
              border={"outlineOnHover"}
              disabled={!!emailError || !!passwordError}
            />
            <p className={styles.registrationMsg}>
              Already have an account?{" "}
              <a href="#" className={styles.resgistration}>
                Register Here
              </a>
            </p>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default LogInPage;

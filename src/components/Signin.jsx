import  { useState, useEffect } from "react";
import { useRive, useStateMachineInput } from "rive-react";
import { Button, TextField, Box, Typography, Container } from "@mui/material";
import  "../styles/Sigin.css"; 

const STATE_MACHINE_NAME = "State Machine 1";

export default function Signin({ checkLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { rive, RiveComponent } = useRive({
    src: "../assets/lo.svg", // Path to your Rive file
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const stateSuccess = useStateMachineInput(rive, STATE_MACHINE_NAME, "success");
  const stateFail = useStateMachineInput(rive, STATE_MACHINE_NAME, "fail");
  const stateHandUp = useStateMachineInput(rive, STATE_MACHINE_NAME, "hands_up");
  const stateCheck = useStateMachineInput(rive, STATE_MACHINE_NAME, "Check");
  const stateLook = useStateMachineInput(rive, STATE_MACHINE_NAME, "Look");

  useEffect(() => {
    setLook();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  const setLook = () => {
    if (!stateLook || !stateCheck || !setHangUp) return;
    setHangUp(false);
    setCheck(true);

    let nbChars = email.length;
    let ratio = nbChars / 41;
    let lookToSet = ratio * 100 - 25;
    stateLook.value = Math.round(lookToSet);
  };

  const setHangUp = (hangUp) => {
    if (stateHandUp) {
      stateHandUp.value = hangUp;
    }
  };

  const setCheck = (check) => {
    if (stateCheck) {
      stateCheck.value = check;
    }
  };

  const triggerSuccess = () => {
    if (stateSuccess) stateSuccess.fire();
  };

  const triggerFail = () => {
    if (stateFail) stateFail.fire();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (checkLogin(email, password)) {
      triggerSuccess();
    } else {
      triggerFail();
    }
  };

  return (
    <Container component="main" maxWidth="xs" className="main-container">
      <Box className="form-container">
        {/* Animation Rive */}
        <div className="rive-animation">
          <RiveComponent style={{ width: "400px", height: "400px" }} />
   
        </div>
        {/* Titre du formulaire */}
        <Typography component="h1" variant="h5" className="form-title">
          Sign in
        </Typography>
        {/* Formulaire */}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            className="text-field"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onFocus={() => setHangUp(false)}
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <TextField
            className="text-field"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onFocus={() => setHangUp(true)}
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          <Button
            className="submit-button"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

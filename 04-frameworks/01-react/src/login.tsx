import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Stack, Button } from '@mui/material';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate("/list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <>
      <div className="loginDialog">
        <Stack component="form" onSubmit={handleNavigation} sx={{ width: '25ch' }} spacing={2} noValidate autoComplete="off" >
          <TextField id="outlined-basic" label="Username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <TextField id="outlined-basic" label="Password" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <Button type="submit" variant="contained" color="success">Login</Button>
        </Stack>
      </div>
    </>
  );
};

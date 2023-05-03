import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { BorderBottom, Visibility, VisibilityOff } from '@mui/icons-material';

function PasswordTextField() {
  const [showPassword, setShowPassword] = useState(false);
  const useStyles = makeStyles (theme => ({
    textbox:{
        '& .MuiOutlinedInput-root': {
            color: 'white',
            border: '1px solid red'
        }
    },

}))
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <TextField
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleTogglePassword}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
export default PasswordTextField;

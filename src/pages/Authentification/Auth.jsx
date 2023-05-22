import React from "react";
import InputAdornment from '@mui/material/InputAdornment';
import * as Components from "../../components/styled-components/Components.js";
import "./auth.css";

import {
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextField,
} from "@mui/material";

{/******** Icons ********/}

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from '@mui/icons-material/Email';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { DateCalendar } from "@mui/x-date-pickers";


function Auth() {
  const [signIn, toggle] = React.useState(true);

  return (
    <Components.Container>
      {/************  SignUp Form *********/}
      <Components.SignUpContainer signinIn={signIn}>
        <Components.SignupContent>
          <Components.UpperContainer>
            <Components.TitleL>
              Ready to take the next step <br></br> in real estate investing?{" "}
            </Components.TitleL>
            <Components.Paragraph>
              Sign up now to access exclusive opportunities and start building
              your portfolio!
            </Components.Paragraph>
            <Components.ButtonContainer>
              <Button
                sx={{
                  color: "#9E7889",
                  width: "250px",
                  borderColor: "#9E7889",
                }}
                variant="outlined"
                startIcon={<GoogleIcon />}
              >
                Sign In with Google
              </Button>
              <Button
                sx={{
                  color: "#9E7889",
                  width: "250px",
                  borderColor: "#9E7889",
                }}
                variant="outlined"
                startIcon={<FacebookIcon />}
              >
                Signin with Facebook
              </Button>
            </Components.ButtonContainer>
          </Components.UpperContainer>

          <Components.Form>
            {/*--------- First form grid  ---------*/}
            <Components.FormGrid>
              <Components.FormContainer>
                <Components.FormLabel>First Name</Components.FormLabel>
                <TextField
                  sx={{
                    width: "200px",
                  }}
                  id="standard-basic"
                  placeholder="First Name"
                  variant="standard"
                  required
                />
              </Components.FormContainer>

              <Components.FormContainer>
                <Components.FormLabel>Last Name</Components.FormLabel>
                <TextField
                  sx={{
                    width: "200px",
                  }}
                  id="standard-basic"
                  placeholder="Last Name"
                  variant="standard"
                  required
                />
              </Components.FormContainer>

              <Components.FormContainer>
                <Components.FormLabel>Date of Birth</Components.FormLabel>

                 <TextField
                  sx={{
                    width: "200px",
                  }}
                  id="standard-basic"
                  placeholder="DD/MM/YY"
                  variant="standard"
                  required
                />
              </Components.FormContainer>

              <Components.FormContainer>
                <Components.FormLabel>Occupation</Components.FormLabel>
                <TextField
                  sx={{
                    width: "200px",
                  }}
                  id="standard-basic"
                  placeholder="Select occupation"
                  variant="standard"
                  required
                />
               {/* <DropdownMenu/> */}
              </Components.FormContainer>
            </Components.FormGrid>

            <Components.FormLabel>Email</Components.FormLabel>
            <TextField
        id="input-with-icon-textfield"
        placeholder="Enter your email"
        InputProps={{
          startAdornment:(
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
          />
          <br></br>
            {/* ---------  second form grid  --------- */}
            <Components.FormGrid>
              <Components.FormContainer>
                <Components.FormLabel>City,Country</Components.FormLabel>
                <TextField
                  sx={{
                    width: "200px",
                  }}
                  id="standard-basic"
                  placeholder="Select city,country"
                  variant="standard"
                  required
                />

              </Components.FormContainer>
              
              <Components.FormContainer>
                <Components.FormLabel>Phone Number</Components.FormLabel>
                <TextField
                  sx={{
                    width: "200px",
                  }}
                  id="standard-basic"
                  placeholder="+000 | Enter your number"
                  variant="standard"
                  required
                />
              </Components.FormContainer>

              <Components.FormContainer>
                <Components.FormLabel>Password</Components.FormLabel>
                <TextField
                  id="input-with-icon-textfield"
                  placeholder="Enter your password"
                  type="password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <VisibilityOffIcon className="eyeicon"/>
                      </InputAdornment>
          ),
        }}
        variant="standard"
          />
              </Components.FormContainer>

              <Components.FormContainer>
                <Components.FormLabel>Confirm Password</Components.FormLabel>
                <TextField
                            id="input-with-icon-textfield"
                            placeholder="Enter your password"
                            type="password"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <VisibilityOffIcon className="eyeicon"/>
                                </InputAdornment>
                              ),
                            }}
                            variant="standard"
                  />
               </Components.FormContainer>
            </Components.FormGrid>
          </Components.Form>

          <Components.AgreeContainer>
            <FormGroup>
              <Components.AgreeContainerItem>
              <FormControlLabel 
                control={<Checkbox/>}
              /><p className="agreecontainer-text">Yes, I want to receive Propown's emails </p>
                </Components.AgreeContainerItem>

              <Components.AgreeContainerItem>
              <FormControlLabel
                control={<Checkbox/>}
              /><p className="agreecontainer-text">I agree to the <a href="" className="agreelink"> Terms</a>,<a href="" className="agreelink"> Privacy Policy </a> and<a href="" className="agreelink"> Fees</a> </p>
                </Components.AgreeContainerItem>
            </FormGroup>
          </Components.AgreeContainer>

          {/*---------  Sign Up Button --------- */}

          <Components.Button>Sign Up</Components.Button>
        </Components.SignupContent>
      </Components.SignUpContainer>





      {/********* Login Form ********/}

      <Components.SignInContainer signinIn={signIn}>
        <Components.UpperContainer>
          <Components.TitleL>Login to your account</Components.TitleL>
          <Components.Paragraph>Welcome Back</Components.Paragraph>
          <Components.ButtonContainer>
            <Button
              sx={{
                color: "#9E7889",
                width: "250px",
                borderColor: "#9E7889",
              }}
              variant="outlined"
              startIcon={<GoogleIcon />}
            >
              Login with Google
            </Button>
            <Button
              sx={{
                color: "#9E7889",
                width: "250px",
                borderColor: "#9E7889",
              }}
              variant="outlined"
              startIcon={<FacebookIcon />}
            >
              Login with Facebook
            </Button>
          </Components.ButtonContainer>
        </Components.UpperContainer>


  {/****** Start Form *****/}

        <Components.Form>
        <p className="formlabel">Email</p>
        <TextField
        id="input-with-icon-textfield"
        placeholder="Enter your email"
        InputProps={{
          startAdornment:(
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}

        variant="standard"
          />
          <br></br>
          <br></br>
          <br></br>
        <p className="formlabel">Password</p>
         <TextField
        id="input-with-icon-textfield"
        placeholder="Enter your password"
        type="password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <VisibilityOffIcon className="eyeicon"/>
            </InputAdornment>
          ),
        }}
        variant="standard"
          /> 
          <a href="" className="textlink">Forgot your password ?</a>

          {/*<DropdownMenu className="Ldropdown"/>*/}

          

        </Components.Form>


        <Components.Button>Login</Components.Button>

      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          {/********** Overlay component that redirect  you to Login page **********/}

          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.OverlayTitle>
              Already have an account ?
            </Components.OverlayTitle>
            <Components.OverlayParagraph>
              Unlock the world of real estate investing
            </Components.OverlayParagraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Log In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          {/********** Overlay component that redirect  you to signin page **********/}

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.OverlayTitle className="font-face-isb">
              Welcome to propown
            </Components.OverlayTitle>
            <Components.OverlayParagraph className="font-face-isb">
              Don't have an account ? <br />
              Signup in less than one minute.
            </Components.OverlayParagraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default Auth;

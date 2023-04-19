import React from "react";
import * as Components from "./Components.js";
import {
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextField,
} from "@mui/material";

import {GoogleIcon} from "@mui/icons-material/Google";

import {FacebookIcon} from "@mui/icons-material/Facebook";


function App() {
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
                  label="First Name"
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
                  label="Last Name"
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
                  label="Date of Birth"
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
                  label="Occupation"
                  variant="standard"
                  required
                />
              </Components.FormContainer>
            </Components.FormGrid>

            <TextField
              id="standard-basic"
              label="Enter your email"
              variant="standard"
              required
            />

            {/* ---------  second form grid  --------- */}

            <Components.FormGrid>
              <Components.FormContainer>
                <Components.FormLabel>City,Country</Components.FormLabel>
                <TextField
                  sx={{
                    width: "200px",
                  }}
                  id="standard-basic"
                  label="Select city,country"
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
                  label="Enter your number"
                  variant="standard"
                  required
                />
              </Components.FormContainer>

              <Components.FormContainer>
                <Components.FormLabel>Password</Components.FormLabel>
                <TextField
                  sx={{
                    width: "200px",
                  }}
                  id="standard-basic"
                  label="Enter password"
                  variant="standard"
                  required
                />
              </Components.FormContainer>

              <Components.FormContainer>
                <Components.FormLabel>Confirm Password</Components.FormLabel>
                <TextField
                  sx={{
                    width: "200px",
                  }}
                  id="standard-basic"
                  label="Confirm password"
                  variant="standard"
                  required
                />
              </Components.FormContainer>
            </Components.FormGrid>
          </Components.Form>


          <Components.AgreeContainer>
            <FormGroup>
              <FormControlLabel
                sx={{
                  size: "12px",
                }}
                control={<Checkbox />}
                label="Yes, I want to receive Investoutou's emails"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="I agree to the Terms , Privacy Policy and Fees "
              />
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


        <Components.Form>
          <TextField
            id="standard-basic"
            label="Enter your email"
            variant="standard"
            required
          />
          <br></br>
          <br></br>
          <br></br>
          <TextField
            id="standard-basic"
            label="Enter your password"
            variant="standard"
            required
          />
          <Components.Paragraph href="#">
            Forgot your password?
          </Components.Paragraph>
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

export default App;

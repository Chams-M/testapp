import React , {useState} from "react";
import InputAdornment from "@mui/material/InputAdornment";
import * as Components from "../../components/styled-components/Components.js";
import "./auth.css";
import SaveButton from "../../components/buttons/saveButton.jsx"
import {
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextField,
} from "@mui/material";

{
  /******** Icons ********/
}
// add name / value / onChange = handleChange / validationSchema (Yup)

import  GoogleIcon  from "../../assets/svg/GoogleIcon.jsx";
import  FacebookIcon from "../../assets/svg/FacebookIcon.jsx";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import { Save } from "@mui/icons-material";
import * as Yup from "yup";

function Auth() {
  const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const [signIn, toggle] = React.useState(true);
  // const { switchToSignin } = useContext(AccountContext);
   const [success, setSuccess] = useState(null);
   const [error, setError] = useState(null);
    const onSubmit= async(values)=>{
      const {confirmPassword,...data} = values;
        const response = await  axios.post("https://localhost:9000/auth/register",data).catch((err)=>{
          if (err && err.response)
          console.log("errrrrror",err);
        });
        if (response && response.data)
    {
      setError(null);
      setSuccess(response.data.message);
      formik.resetForm();
    }
  }

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    occupation: Yup.string().required('Occupation is required'),
    dateOfBirth: Yup.date()
      .required('Date of birth is required')
      .max(new Date(), 'Date of birth cannot be in the future'),
    location: Yup.string().required('Location is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
}).test('console-log', 'Submitted object:', function (values) {
  console.log(values);
  return true;
  });
  

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      occupation: "",
      dateofBirth: "",
      location: "",
      email: "",
      phoneNumber: "",
      password:"",
      confirmPassword:""
    },
    //validation
     onSubmit,
     validationSchema:validationSchema,
  });

// axiosInstance
//const AxiosInstance 
// Redux

function imClicked() {
    console.log("i'm clickeeeed");
  }

  return (
    <Components.Container>
      {/************  SignUp Form *********/}
      <Components.SignUpContainer signinIn={signIn}>
        <form onSubmit={formik.handleSubmit}>
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
                  onClick={imClicked}
                  sx={{
                    color: "#9E7889",
                    width: "250px",
                    borderColor: "#9E7889",
                  }}
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                >
                Sign Up with Google
                </Button>
                <Button
                  onClick={imClicked}
                  sx={{
                    color: "#9E7889",
                    width: "250px",
                    borderColor: "#9E7889",
                  }}
                  variant="outlined"
                  startIcon={<FacebookIcon />}
                >
                  Sign Up with Facebook
                </Button>
              </Components.ButtonContainer>
            </Components.UpperContainer>

            <Components.Form>
              {/*--------- First form grid  ---------*/}
              <Components.FormGrid>
                <Components.FormContainer>
                  <Components.FormLabel>First Name</Components.FormLabel>
                  <TextField
                  //add names 
                    name="firstName"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    sx={{
                      width: "200px",
                    }}
                    placeholder="First Name"
                    variant="standard"
                    required
                  />
                  
                </Components.FormContainer>

                <Components.FormContainer>
                  <Components.FormLabel>Last Name</Components.FormLabel>
                  <TextField
                    name="lastName"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    sx={{
                      width: "200px",
                    }}
                   
                    placeholder="Last Name"
                    variant="standard"
                    required
                  />
                </Components.FormContainer>

                <Components.FormContainer>
                  <Components.FormLabel>Date of Birth</Components.FormLabel>

                  <TextField
                    name="dateofBirth"
                    onChange={formik.handleChange}
                    value={formik.values.dateofBirth}
                    sx={{
                      width: "200px",
                    }}
                    placeholder="DD/MM/YY"
                    variant="standard"
                    required
                  />
                </Components.FormContainer>

                <Components.FormContainer>
                  <Components.FormLabel>Occupation</Components.FormLabel>
                  <TextField
                    name="occupation"
                    onChange={formik.handleChange}
                    value={formik.values.occupation}
                    sx={{
                      width: "200px",
                    }}
                   
                    placeholder="Select occupation"
                    variant="standard"
                    required
                  />
                  {/* <DropdownMenu/> */}
                </Components.FormContainer>
              </Components.FormGrid>

              <Components.FormLabel>Email</Components.FormLabel>
              <TextField
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Enter your email"
                InputProps={{
                  startAdornment: (
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
                   name="location"
                    onChange={formik.handleChange}
                    value={formik.values.location}
                    sx={{
                      width: "200px",
                    }}
                    
                    placeholder="Select city,country"
                    variant="standard"
                    required
                  />
                </Components.FormContainer>

                <Components.FormContainer>
                  <Components.FormLabel>Phone Number</Components.FormLabel>
                  <TextField
                    name="phoneNumber"
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                    sx={{
                      width: "200px",
                    }}
                    
                    placeholder="+000 | Enter your number"
                    variant="standard"
                    required
                  />
                </Components.FormContainer>

                <Components.FormContainer>
                  <Components.FormLabel>Password</Components.FormLabel>
                  <TextField
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  
                    placeholder="Enter your password"
                    type="password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <VisibilityOffIcon className="eyeicon" />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                </Components.FormContainer>

                <Components.FormContainer>
                  <Components.FormLabel>Confirm Password</Components.FormLabel>
                  <TextField
                    name="confirmPassword"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                   
                    placeholder="Enter your password"
                    type="password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <VisibilityOffIcon className="eyeicon" />
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
                  <FormControlLabel control={<Checkbox />} />
                  <p className="agreecontainer-text">
                    Yes, I want to receive Propown's emails{" "}
                  </p>
                </Components.AgreeContainerItem>

                <Components.AgreeContainerItem>
                  <FormControlLabel control={<Checkbox />} />
                  <p className="agreecontainer-text">
                    I agree to the{" "}
                    <a href="" className="agreelink">
                      {" "}
                      Terms
                    </a>
                    ,
                    <a href="" className="agreelink">
                      {" "}
                      Privacy Policy{" "}
                    </a>{" "}
                    and
                    <a href="" className="agreelink">
                      {" "}
                      Fees
                    </a>{" "}
                  </p>
                </Components.AgreeContainerItem>
              </FormGroup>
            </Components.AgreeContainer>

            {/*---------  Sign Up Button --------- */}
               
            <Components.Button>Sign Up</Components.Button>
          </Components.SignupContent>
         
        </form>

      </Components.SignUpContainer>

      {/********* Login Form ********/}

      <Components.SignInContainer signinIn={signIn}>
        <Components.UpperContainer>
          <Components.TitleL>Login to your account</Components.TitleL>
          <Components.Paragraph>Welcome Back</Components.Paragraph>
          <Components.ButtonContainer>
            <Button
              onClick={imClicked}
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
              onClick={imClicked}
              sx={{
                color: "#9E7889",
                width: "250px",
                borderColor: "#9E7889",
              }}
              variant="outlined"
              startIcon={<FacebookIcon/>}
            >
              Login with Facebook
            </Button>
          </Components.ButtonContainer>
        </Components.UpperContainer>

        {/****** Start Form *****/}
        <form onSubmit={formik.onSubmit}>
          <Components.Form>
            <p className="formlabel">Email</p>
            <TextField
              onChange={formik.handleChange}
              value={formik.values.email}
              
              placeholder="Enter your email"
              InputProps={{
                startAdornment: (
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
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Enter your password"
              type="password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <VisibilityOffIcon className="eyeicon" />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <a href="" className="textlink">
              Forgot your password ?
            </a>

            {/*<DropdownMenu className="Ldropdown"/>*/}
          </Components.Form>
        </form>

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

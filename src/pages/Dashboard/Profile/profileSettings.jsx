import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import * as Components from "../../../components/styled-components/Components.js";
import "./profile.css";
import { TextField, Button } from "@mui/material";
import "../../../pages/Authentification/auth.css";
import CancelButton from "../../../components/buttons/cancelButton.jsx";
import SaveButton from "../../../components/buttons/saveButton.jsx";
import { useFormik } from "formik";
import Dropdown from "../../../components/dropdown.jsx";

export default function ProfileSettings() {

  
  const occupation = [
    {
      value: "default",
      label: "Select Occupation",
    },
    {
      value: "en",
      label: "English",
    },
    {
      value: "fr",
      label: "Frensh",
    },
    {
      value: "ar",
      label: "Arabic",
    },
    {
      value: "tur",
      label: "Turkish",
    },
  ];
  const countries = [
    {
      value: "default",
      label: "Select Country,City",
    },
    {
      value: "Tun",
      label: "Tunisia",
    },
    {
      value: "Fr",
      label: "France",
    },
    {
      value: "Mar",
      label: "Morroco",
    },
    {
      value: "It",
      label: "Italy",
    },
  ];

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      occupation: "",
      dateofBirth: "",
      email: "",
      phoneNumber: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      //or console.log("onSubmit" , values)
    },
  });

  function imClicked() {
    console.log("i'm clickeeeed");
  }

  return (
    <div className="profile-settings-wrapper">
      <div className="profile-container">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <Components.FormGrid>
              <Components.FormContainer>
                <Components.FormLabel>First Name</Components.FormLabel>
                <TextField
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
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
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
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
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
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
                <Dropdown
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  data={occupation}
                  width="100%"
                />
                {/* <DropdownMenu/> */}
              </Components.FormContainer>
            </Components.FormGrid>
            <Components.FormLabel>Email</Components.FormLabel>
            <TextField
              onChange={formik.handleChange}
              value={formik.values.firstName}
              id="input-with-icon-textfield"
              placeholder="Enter your email"
              sx={{
                width: "500px",
                paddingBottom: "30px",
              }}
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
                <Dropdown
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  data={countries}
                  width="100%"
                  placeholder="occupation"
                />
              </Components.FormContainer>

              <Components.FormContainer>
                <Components.FormLabel>Phone Number</Components.FormLabel>
                <TextField
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  sx={{
                    width: "200px",
                  }}
                  id="standard-basic"
                  placeholder="+000 | Enter your number"
                  variant="standard"
                  required
                />
              </Components.FormContainer>
            </Components.FormGrid>
          </div>
        </form>
      </div>
      <div className="profile-settings-btn">
        <SaveButton
          action={imClicked}
          text="Save"
          width="150px"
          height="50px"
        />
        <CancelButton
          action={imClicked}
          text="Cancel"
          id="profile-btn"
          width="150px"
          height="50px"
        />
      </div>
    </div>
  );
}

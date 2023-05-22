import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import * as Components from "../../../components/styled-components/Components.js";
import "./profile.css";
import { TextField } from "@mui/material";
import "../../../pages/Authentification/auth.css";
import CancelButton from "../../../components/buttons/cancelButton.jsx";
import SaveButton from "../../../components/buttons/saveButton.jsx";

export default function ProfileSettings() {
  return (
    <div className="profile-container">
      <div>
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
        </Components.FormGrid>
      </div>
      <div className="profile-settings-btn">
        <SaveButton text="Save" color="#9E7889" width="150px" height="50px" />
        <CancelButton
          text="Cancel"
          id="profile-btn"
          width="150px"
          height="50px"
        />
      </div>
    </div>
  );
}

import React from "react";
import "./profile.css";
import "../../../auth.css";
import CancelButton from "../../../components/buttons/cancelButton.jsx";
import SaveButton from "../../../components/buttons/saveButton.jsx";
import { Divider } from "@mui/material";
import { FacebookIcon } from "../../../assets/svg/FacebookIcon";
import { TwitterIcon } from "../../../assets/svg/TwitterIcon";
import { LinkedinIcon } from "../../../assets/svg/LinkedinIcon";
import { TextField } from "@mui/material";

import UploadIcon from "@mui/icons-material/Upload";
import LinkIcon from "@mui/icons-material/Link";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function ProfileExperience() {
  return (
    <div className="profile-experience-container">
      <span className="experience-description-title"> Description </span>
      <p className="user-experience-description">
        Lorem ipsum dolor sit amet consectetur. Fermentum amet purus dolor
        aliquam sed ornare urna nisi. Turpis feugiat vitae amet purus turpis
        orci dignissim. Convallis magna sagittis amet commodo.{" "}
      </p>
      <div>Tags</div>
      <Divider
        sx={{
          paddingTop: "20px",
        }}
      />
      <div className="user-social-media">
        <div className="user-social-media-item">
          <div>
            <LinkedinIcon />
            <span>Linkedin</span>
          </div>
          <TextField
            sx={{
              width: "150px",
              marginTop: "12px",
            }}
            id="standard-basic"
            placeholder="Add link"
            variant="standard"
            required
          />
        </div>
        <div className="user-social-media-item">
          <div>
            <TwitterIcon />
            <span>Twitter</span>
          </div>
          <TextField
            sx={{
              width: "150px",
              marginTop: "12px",
            }}
            id="standard-basic"
            placeholder="Add link"
            variant="standard"
            required
          />
        </div>
        <div className="user-social-media-item">
          <div>
            <FacebookIcon />
            <span>Facebook</span>
          </div>
          <TextField
            sx={{
              width: "150px",
              marginTop: "12px",
            }}
            id="standard-basic"
            placeholder="Add link"
            variant="standard"
            required
          />
        </div>
        <div className="user-social-media-item">
          <span>(Optional)</span>
        </div>
      </div>
      <br></br>
      <div className="profile-add-btn experience">
        <p id="profile-btn-label">
          Add Experience
          <AddCircleIcon
            sx={{ height: "20px", width: "20px", marginLeft: "330px" }}
          />
        </p>
      </div>
      <br></br>
      <div className="profile-add-btn resume">
        <p id="profile-experience-btn-label">
          Add Resume
          <UploadIcon
            sx={{ height: "20px", width: "20px", marginLeft: "80px" }}
          />
          <LinkIcon sx={{ height: "20px", width: "20px" }} />
        </p>
      </div>

      <div className="profile-btn">
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

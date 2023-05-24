import React from "react";
import "./profile.css";
import "../../../pages/Authentification/auth.css";
import CancelButton from "../../../components/buttons/cancelButton.jsx";
import SaveButton from "../../../components/buttons/saveButton.jsx";
import { Button, Divider } from "@mui/material";
import  FacebookIcon  from "../../../assets/svg/FacebookIcon";
import { TwitterIcon } from "../../../assets/svg/TwitterIcon";
import { LinkedinIcon } from "../../../assets/svg/LinkedinIcon";
import { TextField } from "@mui/material";
import AddIcon from "../../../assets/svg/AddIcon";
import UploadIcon from "@mui/icons-material/Upload";
import LinkIcon from "@mui/icons-material/Link";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function ProfileExperience() {
  function imClicked(){
    console.log("i'm clickeeeed");
  }

  return (
    <div>
    <div className="profile-experience-container">
      <span className="experience-description-title"> Description </span>
      <div className="user-experience-description">
        Lorem ipsum dolor sit amet consectetur. Fermentum amet purus dolor
        aliquam sed ornare urna nisi. Turpis feugiat vitae amet purus turpis
        orci dignissim. Convallis magna sagittis amet commodo.{" "}
      </div>
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
      <div className="add-btns">
      <div>
      <Button
      id="add-experience-btn"
      variant="contained"
      endIcon={<AddIcon
        sx={{marginLeft: "100px" }}
      />}
      sx={{
        backgroundColor: "#EEF6FE",
        color: "#464F56",
        fontSize: "10px",
        width: "500px",
       
        fontFamily: "sans-serif",
      }}
      >
        <span id="profile-btn-label">Add Experience</span>
      </Button>
      </div>
      <Button
      id="add-experience-btn"
      variant="contained"
      endIcon={<UploadIcon
      />}
      sx={{
        backgroundColor: "#EEF6FE",
        color: "#464F56",
        fontSize: "10px",
        width: "300px",
        fontFamily: "sans-serif",
      }}
      >
        <span id="profile-btn-label">Add Resume</span>
      </Button>
      </div>
      
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

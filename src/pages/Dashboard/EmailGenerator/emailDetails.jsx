import React from "react";
import "./emailGenerator.css";
import Dropdown from "./dropdown";
import TextField from "@mui/material/TextField";
import Vocal from "../../../assets/svg/Vocal";
import RecorderIcon from "../../../assets/svg/RecorderIcon";
import { Button } from "@mui/material";

const languages = [
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

const categories = [
  {
    value: "profileViewers",
    label: "Who viewed my profile",
  },
  {
    value: "propertiesInvestor",
    label: "Who invested in my properties",
  },
];

const EmailDetails = () => {
  return (
    <div className="email-details-wrapper">
    <div className="email-details-container">
      <div>
        <p className="email-detail-label">Subject Title</p>
        <div>
          <TextField
            id="standard-basic"
            variant="standard"
            placeholder="Lorem Ipsum"
            sx={{
                width:"80%"
            }}
          />
        </div>
      </div>
      <div>
        <p className="email-detail-label">Language</p>
        <div>
          <Dropdown data={languages} />
        </div>
      </div>
      <div>
        <p className="email-detail-label">Record a text</p>
        <div className="recorder-container">
                <div>
                <Vocal/>
                </div>
                <div>
                <Button><RecorderIcon/></Button>
                </div>
           
        </div>
      </div>
      <div>
        <p className="email-detail-label">Recipient category</p>
        <div>
          <Dropdown data={categories} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default EmailDetails;

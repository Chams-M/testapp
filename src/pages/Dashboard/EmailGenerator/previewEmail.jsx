import React from "react";
import "./emailGenerator.css";
import CancelButton from "../../../components/buttons/cancelButton.jsx";
import SaveButton from "../../../components/buttons/saveButton.jsx";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailGeneratedText from './components/SlateEditor/Editor'
import { Box } from "@mui/material";
function PreviewEmail() {
  return (
    <div className="preview-email-container">
      
      <div className='email-genrator-box'>
            <EmailGeneratedText/>
        </div>
        <Box display="flex" justifyContent="flex-end" gap={3}>
        <CancelButton text="Save as Draft"  width="150px"
          height="50px" />
          <SaveButton
          text="Send Now"
          color="#9E7889"
          width="150px"
          height="50px"
          endIcon={<CalendarMonthIcon/>}
        />
        </Box>
   
    </div>
  );
}
export default PreviewEmail;

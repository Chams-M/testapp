import React from "react";
import '../dashboard.css';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "../Payment/payment_history.css"
import "./emailGenerator.css";
import PreviewEmail from "./previewEmail";
import EmailDetails from "./emailDetails";
import DraftEmail from "./draftEmail";


function EmailGenerator(){
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }
    return (
    
        <div className="email-genrator-container">
        <div className="email-generator-box">
        <div> 
        <Box sx={{ width: '30%',marginLeft:"3%",marginTop:"2%"}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" >
            <Tab label="Preview" value="1" />
            <Tab label="Draft" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><PreviewEmail/></TabPanel>
        <TabPanel value="2"><DraftEmail/></TabPanel>
       
      </TabContext>
    </Box>
    </div>
    
    </div>

    <div className="email-generator-details">
     <EmailDetails/>
    </div>
        </div>
        
);
}
export default EmailGenerator;


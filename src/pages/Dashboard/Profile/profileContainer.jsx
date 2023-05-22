import React from "react";
import '../dashboard.css';
import { styled } from '@mui/material/styles';
import { Avatar , Badge, Divider } from '@mui/material';
import UserImage  from "../../../assets/images/user-image.jpeg";
import  Camera  from "../../../assets/images/camera.jpeg";
import ProgressBar from "../../../components/progressBar";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProfileSettings from "./profileSettings";
import ProfileExperience from "./profileExperience";
import ProfileNotifications from "./profileNotifications";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 25,
    height: 25,
    backgroundColor:"#6596C8",
    border: `2px solid ${theme.palette.background.paper}`,
  }));

function ProfileContainer (){
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

    return (
    <div className="profile-section">
        <div className="user-info">
        <div className="user-info-details">
        <Badge
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  badgeContent={
    <SmallAvatar alt="Remy Sharp" src={Camera}/>
  }
>       <Avatar alt="user-image" src={UserImage}
            sx={{
                height:"150px",
                width:"150px"
            }}
        /></Badge>
        <p className="user-name">Mark Smith</p>
        <span className="user-location">New York ,USA</span>
        </div>
        <div className="user-progress">
        <p className="user-compeletion">Profile Compeletion</p>
        <div className="user-progress-bar">
        <ProgressBar value={30} color="#82D482" height="10px" width="200px" className="progress-bar"/>
           <div className="progress-bar-data"> <p>30%</p> </div>
        </div>
        </div>
        
        <div className="user-deals">
            <Divider  light/>
            <div className="user-deals-item">
            <span>Open deals</span>
            <span id="user-deals-number">5</span>
            </div>
            <Divider  light />
            <div className="user-deals-item">
            <span>Closed deals</span>
            <span id="user-deals-number">6</span>
            </div>
            <Divider light />
            <div className="user-deals-item">
            <span>Favorites</span>
            <span id="user-deals-number">7</span>
            </div>
            <Divider light/>
            <div className="copy-link-box">
            <Button variant="outlined" endIcon={<ContentCopyIcon />}
            sx={{
                width:150,
    
            }}
            >
                <span id="copy-link-box">Copy Link</span>
            </Button>
            </div>
            
        </div>
       

        </div>
        <div className="user-data">

        <Box sx={{ width: '80%',marginLeft:"10%"}}>
      <TabContext value={value}
      >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab label="Settings" value="1" />
            <Tab label="Experience" value="2" />
            <Tab label="Notifications" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><ProfileSettings/></TabPanel>
        <TabPanel value="2"><ProfileExperience/></TabPanel>
        <TabPanel value="3"><ProfileNotifications/></TabPanel>
      </TabContext>
    </Box>
            
        </div>
    </div>
);
}
export default ProfileContainer;


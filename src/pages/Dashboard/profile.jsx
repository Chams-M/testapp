import React from "react";
import './dashboard.css';
import { styled } from '@mui/material/styles';
import { Grid, Card, CardContent, Avatar , Badge, Divider } from '@mui/material';
import { serviceLayout } from "../../constants/serviceLayout";
import UserImage  from "../../assets/images/chamsmoumni.jpg";
import  Camera  from "../../assets/images/camera.jpeg";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 25,
    height: 25,
    backgroundColor:"#6596C8",
    border: `2px solid ${theme.palette.background.paper}`,
  }));

function ProfileContainer (){
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
        <p>Chams Moumni</p>
        <p>Monastir , Tunisia</p>
        <div className="">
            <p>Profile Compeletion</p>
            <p> ProgressBar</p>
        </div>
        <div>
            <Divider/>
            <div>
            <span>open deals</span>
            <span>5</span>
            </div>
            <Divider/>
            <div>
            <span>Closed deals</span>
            <span>6</span>
            </div>
            <Divider/>
            <div>
            <span>Favorites</span>
            <span>7</span>
            </div>

            <div>
                Copy Link
            </div>
        </div>
        </div>
        </div>
        <div className="user-data">

            
        </div>
    </div>
);
}

export default ProfileContainer;
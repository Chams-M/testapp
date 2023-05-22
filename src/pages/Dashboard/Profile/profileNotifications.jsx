import React from "react";
import { Divider } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';

export default function ProfileNotifications(){

    return (
        <div id="profile-notifications">
        <div className="day-divider">
        <Divider>
         <div className="notifications-day">
            <span>Today</span>
        </div>    
        
        </Divider>
        </div>


        <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >


      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{bgcolor:"#D9D9D9" ,height:"40px",width:"40px"}}>
            <PersonIcon sx={{height:"45px",width:"45px",paddingTop:"10px" , color:"#FAFAFA"}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Lorem Ipsum Asked for a Call" secondary="8:25 PM" />
      </ListItem>
    <br></br>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{bgcolor:"#D9D9D9" ,height:"40px",width:"40px"}}>
            <PersonIcon sx={{height:"45px",width:"45px",paddingTop:"10px" , color:"#FAFAFA"}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Lorem Ipsum Accepted your proposal" secondary="6:37 PM" />
      </ListItem>

    </List>
        <div className="day-divider">
        <Divider>
         <div className="notifications-day">
            <span>Yesterday</span>
        </div>    
        
        </Divider>
<br></br>
        <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >


      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{bgcolor:"#D9D9D9" ,height:"40px",width:"40px"}}>
            <PersonIcon sx={{height:"45px",width:"45px",paddingTop:"10px" , color:"#FAFAFA"}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Lorem Ipsum Asked for a Call" secondary="8:25 PM" sx={{
            fontSize:"12px",
            color:"#0F1A24"
        }} />
      </ListItem>
    <br></br>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{bgcolor:"#D9D9D9" ,height:"40px",width:"40px"}}>
            <PersonIcon sx={{height:"45px",width:"45px",paddingTop:"10px" , color:"#FAFAFA"}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Lorem Ipsum Accepted your proposal" secondary="6:37 PM" />
      </ListItem>

    </List>
        </div>
        </div>
    
    );
}
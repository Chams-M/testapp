import React from "react";
import '../dashboard.css';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "./payment_history.css"
import SentPayments from "./sentPayments";
import ReceivedPayments from "./receivedPayments";
import AllPayments from "./allPayments";


function PaymentHistory (){
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

    return (
    <div>
        <div className="user-payment-history-container">
        <div className="payment-history-top">

        <div> 
        <Box sx={{ width: '100%',marginLeft:"3%",marginTop:"2%"}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" >
            <Tab label="All" value="1" />
            <Tab label="Sent" value="2" />
            <Tab label="Received" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><AllPayments/></TabPanel>
        <TabPanel value="2"><SentPayments/></TabPanel>
        <TabPanel value="3"><ReceivedPayments/></TabPanel>
      </TabContext>
    </Box>
    </div>
    
    </div>
        </div>
        <br></br><br></br>
        </div>

        
);
}
export default PaymentHistory;


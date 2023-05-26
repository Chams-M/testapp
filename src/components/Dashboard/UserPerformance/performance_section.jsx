import React from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Heatmap from "./performanceCalendar";

export default function PerformanceSection() {
  return (
    <div style={{marginLeft:"40px",marginTop:"40px"}}>
      <Card style={{height:"100%" , width:"100%"}}>
        <div style={{ height: "20px", padding: "9px 20px 0px 12px" }}>
          <div style={{ fontWeight: "400" ,fontSize:"19px" ,color:"rgba(61, 93, 126, 1)"}}>
            Performance
          </div>
        </div>
        <div style={{ padding: "0px 20px 0px 15px" , marginTop:"30px"}}>
          <Heatmap />
        </div>
       
      </Card>
      <br></br>
    </div>
  );
}

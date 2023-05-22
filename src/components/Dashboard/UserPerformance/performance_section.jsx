import React from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Heatmap from "./performanceCalendar";

export default function PerformanceSection() {
  return (
    <div style={{marginLeft:"150px",marginTop:"20px"}}>
      <Card style={{height:"250px" , width:"90%"}}>
        <div style={{ height: "20px", padding: "9px 20px 0px 12px" ,marginBottom:"10px" }}>
          <div style={{ fontWeight: "600" ,fontSize:"17px" ,color:"rgba(61, 93, 126, 1)"}}>
            Performance
          </div>
        </div>
        
        <div style={{ padding: "20px" }}>
          <Heatmap />
        </div>
      </Card>
    </div>
  );
}

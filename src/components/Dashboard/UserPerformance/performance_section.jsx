import React from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Heatmap from "./performanceCalendar";

export default function PerformanceSection() {
  return (
    <div style={{marginLeft:"40px",marginTop:"20px"}}>
      <Card style={{height:"250px" , width:"80%"}}>
        <div style={{ height: "20px", padding: "9px 20px 0px 12px" }}>
          <div style={{ fontWeight: "600" , }}>
            Performance
          </div>
        </div>
        <Divider/>
        <div style={{  padding: "20px" }}>
          <Heatmap />
        </div>
      </Card>
    </div>
  );
}

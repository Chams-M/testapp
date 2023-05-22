import React from "react";
import '../dashboard.css';
import PerformanceSection from "../../../components/Dashboard/UserPerformance/performance_section";
import { Grid, Card, CardContent } from '@mui/material';
import { dashboardLayout } from "../../../constants/dashboardLayout";

function MainContainer (){

    return (
    <div>
        <Grid style={{marginLeft:"15px" ,marginTop:"10px"}} container spacing={3}>
            {dashboardLayout.map((card) => (
            <Grid item xs={12} sm={6} md={6} key={card.title}>
            <Card className="card-container">
                <CardContent>
                <div className="card-title">{card.title}</div>
                <p>{card.data}</p>
                </CardContent>
            </Card>
         </Grid> 
  ))}
</Grid>
<div>
<PerformanceSection className="performance-section"/>
</div>
</div>
    );
}

export default MainContainer;
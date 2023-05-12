import React from "react";
import '../../Dashboard/dashboard.css';
import { Grid, Card, CardContent } from '@mui/material';
import { investmentsLayout } from "../../../constants/investmentsLayout";
import DashboardList from "../../../components/Dashboard/dashboardList";

const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];
  
  const columns = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
  ];

function InvestmentsContainer (){
    return (
    <div>
        <Grid style={{marginLeft:"15px",marginTop:"65px"}} container spacing={3}>
            {investmentsLayout.map((card) => (
            <Grid item xs={12} sm={4} md={4} key={card.title}>
            <Card className="card-container">
                <CardContent>
                <h2 className="card-title">{card.title}</h2>
                <p>{card.data}</p>
                </CardContent>
            </Card>
         </Grid> 
  ))}
</Grid>
<div>
{/* change it to have dynamic size of rows and columns */}
<DashboardList rows={rows} columns={columns} label={"Properties"}/>
</div>
<div>
{/* change it to have dynamic size of rows and columns */}
<DashboardList rows={rows} columns={columns} label={"Properties"}/>
</div>
</div>
    );
}

export default InvestmentsContainer;
import React from "react";
import '../../Dashboard/dashboard.css';
import { Grid, Card, CardContent } from '@mui/material';
import { serviceLayout } from "../../../constants/serviceLayout";
import DashboardList from "../../../components/Dashboard/dashboardList";
import { EditButton } from "../../../components/buttons/editButton";

const rows = [
    { id: 1, col1: 'Hello', col2: 'World' , col3:'hi', col4:'hi', col5:<EditButton/>,col6:'hi'},
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' , col3:'hi', col4:'hi', col5:'hi' ,col6:'hi'},
    { id: 3, col1: 'MUI', col2: 'is Amazing', col3:'hi', col4:'hi', col5:'hi' ,col6:'hi'},
    { id: 4, col1: 'MUI', col2: 'is Amazing', col3:'hi', col4:'hi', col5:'hi',col6:'hi' },
    { id: 5, col1: 'MUI', col2: 'is Amazing', col3:'hi', col4:'hi', col5:'hi',col6:'hi' },
    { id: 6, col1: 'MUI', col2: 'is Amazing', col3:'hi', col4:'hi', col5:'hi' ,col6:'hi'},
    { id: 7, col1: 'MUI', col2: 'is Amazing', col3:'hi', col4:'hi', col5:'hi' ,col6:'hi'},
    
  ];
  
  const columns = [
    { field: 'col1', headerName: 'Property type', width: 200 },
    { field: 'col2', headerName: 'Location', width: 200},
    { field: 'col3', headerName: 'Date and time', width: 200},
    { field: 'col4', headerName: 'Status', width: 200 },
    { field: 'col5', headerName: 'Edit Proposal', width: 200 },
    { field: 'col6', headerName: 'Remove Proposal', width:200 },
  ];

function ServiceContainer (){
    return (
    <div>
        <Grid style={{marginLeft:"15px",marginTop:"10px"}} container spacing={3}>
            {serviceLayout.map((card) => (
            <Grid item xs={12} sm={6} md={6} key={card.title}>
            <Card className="card-container">
                <CardContent 
                sx={{
                  borderRadius:"20px"
                }}
                >
                <h2 className="card-title">{card.title}</h2>
                <p>{card.data}</p>
                </CardContent>
            </Card>
         </Grid> 
  ))}
</Grid>
<div className="list-container">
{/* change it to have dynamic size of rows and columns */}
<DashboardList rows={rows} columns={columns} label={"Proposals"}/>
</div>
</div>
);
}
export default ServiceContainer;
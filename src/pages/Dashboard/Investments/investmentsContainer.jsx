import React from "react";
import '../../Dashboard/dashboard.css';
import { Grid, Card, CardContent } from '@mui/material';
import { investmentsLayout } from "../../../constants/investmentsLayout";
import DashboardList from "../../../components/Dashboard/dashboardList";
import SimpleSlider from "../../../components/carousel";

const rows = [
    { id: 1, col1: 'House', col2: 'Jamaica, New York' ,col3:'13/02/2023 8:25PM', col4:'$ 1.500.00', col5:'$ 1.750.00',col6:'Pending' },
    { id: 2, col1: 'Appartement', col2: 'San Francisco, California' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.650.00',col6:'Accepted' },
    { id: 3, col1: 'Villa', col2: 'Bronx, New York' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.850.00',col6:'Canceled'},
  ];
  
  const columns = [
    { field: 'col1', headerName: 'Property type', width: 200 },
    { field: 'col2', headerName: 'Location', width: 200},
    { field: 'col3', headerName: 'Date and time', width: 200},
    { field: 'col4', headerName: 'Amount', width: 200 },
    { field: 'col5', headerName: 'Profit', width: 200 },
    { field: 'col6', headerName: 'Status', width:200 },
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
<div className="list-container">
{/* <SimpleSlider/>*/}
{/* change it to have dynamic size of rows and columns */}
<DashboardList rows={rows} columns={columns} label={"Properties"}/>

</div>
<div className="list-container">
<DashboardList rows={rows} columns={columns} label={"Favorites"}/>
</div>
</div>
    );
}

export default InvestmentsContainer;
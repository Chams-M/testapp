import React from "react";
import { DataGrid } from '@mui/x-data-grid';

const rows = [
    { id: 1, col1: 'House', col2: 'Jamaica, New York' ,col3:'13/02/2023 8:25PM', col4:'$ 1.500.00', col5:'$ 1.750.00',col6:'Pending' },
    { id: 2, col1: 'Appartement', col2: 'San Francisco, California' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.650.00',col6:'Accepted' },
   

  ];
  
  const columns = [
    { field: 'col1', headerName: 'Receipt', width: 200 },
    { field: 'col2', headerName: 'Receiver', width: 200},
    { field: 'col3', headerName: 'Payment Date', width: 200},
    { field: 'col4', headerName: 'Payment Method', width: 200 },
    { field: 'col5', headerName: 'Amount', width: 200 },
    { field: 'col6', headerName: 'Download All', width:200 },
  ];

export default function ReceivedPayments(props){

    return (
        <div>
         <div style={{ height: '100%', width: '100%' }}>
      <DataGrid 
      rows={rows}
      columns={columns}
      sx={{
     '.MuiDataGrid-columnSeparator': {
      display: 'none',
      },
      '.MuiDataGrid-rowSeparator': {
      display: 'none',
      },
      '&.MuiDataGrid-root': {
       border: 'none',
    },
  }}
      />
    </div>
        </div>
    
    );
}
import React from "react";
import { DataGrid } from '@mui/x-data-grid';


const rows = [
    { id: 1, col1: 'House', col2: 'Jamaica, New York' ,col3:'13/02/2023 8:25PM', col4:'$ 1.500.00', col5:'$ 1.750.00',col6:'Pending' },
    { id: 2, col1: 'Appartement', col2: 'San Francisco, California' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.650.00',col6:'Accepted' },
    { id: 3, col1: 'Villa', col2: 'Bronx, New York' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.850.00',col6:'Canceled'},
    { id: 4, col1: 'Villa', col2: 'Bronx, New York' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.850.00',col6:'Canceled'},
    { id: 5, col1: 'Villa', col2: 'Bronx, New York' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.850.00',col6:'Canceled'},
    { id: 6, col1: 'Villa', col2: 'Bronx, New York' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.850.00',col6:'Canceled'},
    { id: 7, col1: 'Villa', col2: 'Bronx, New York' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.850.00',col6:'Canceled'},
    { id: 8, col1: 'Villa', col2: 'Bronx, New York' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.850.00',col6:'Canceled'},
    { id: 9, col1: 'Villa', col2: 'Bronx, New York' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.850.00',col6:'Canceled'},
    { id: 10, col1: 'Villa', col2: 'Bronx, New York' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.850.00',col6:'Canceled'},
    { id: 11, col1: 'House', col2: 'Jamaica, New York' ,col3:'13/02/2023 8:25PM', col4:'$ 1.500.00', col5:'$ 1.750.00',col6:'Pending' },
    { id: 12, col1: 'Appartement', col2: 'San Francisco, California' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.650.00',col6:'Accepted' },
    { id: 13, col1: 'Villa', col2: 'Bronx, New York' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.850.00',col6:'Canceled'},
    { id: 14, col1: 'Villa', col2: 'Bronx, New York' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.850.00',col6:'Canceled'},
    { id: 15, col1: 'Villa', col2: 'Bronx, New York' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.850.00',col6:'Canceled'},
    { id: 16, col1: 'Villa', col2: 'Bronx, New York' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.850.00',col6:'Canceled'},
    { id: 17, col1: 'Villa', col2: 'Bronx, New York' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.850.00',col6:'Canceled'},
    { id: 18, col1: 'Villa', col2: 'Bronx, New York' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.850.00',col6:'Canceled'},
    { id: 19, col1: 'Villa', col2: 'Bronx, New York' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.850.00',col6:'Canceled'},
    { id: 20, col1: 'Villa', col2: 'Bronx, New York' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.850.00',col6:'Canceled'},
    { id: 21, col1: 'House', col2: 'Jamaica, New York' ,col3:'13/02/2023 8:25PM', col4:'$ 1.500.00', col5:'$ 1.750.00',col6:'Pending' },
    { id: 22, col1: 'Appartement', col2: 'San Francisco, California' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.650.00',col6:'Accepted' },
    { id: 23, col1: 'Villa', col2: 'Bronx, New York' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.850.00',col6:'Canceled'},
    { id: 24, col1: 'Villa', col2: 'Bronx, New York' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.850.00',col6:'Canceled'},
    { id: 25, col1: 'Villa', col2: 'Bronx, New York' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.850.00',col6:'Canceled'},
    { id: 26, col1: 'Villa', col2: 'Bronx, New York' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.850.00',col6:'Canceled'},
    { id: 27, col1: 'Villa', col2: 'Bronx, New York' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.850.00',col6:'Canceled'},
    { id: 28, col1: 'Villa', col2: 'Bronx, New York' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.850.00',col6:'Canceled'},
    { id: 29, col1: 'Villa', col2: 'Bronx, New York' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.850.00',col6:'Canceled'},
    { id: 30, col1: 'Villa', col2: 'Bronx, New York' ,col3:'25/01/2023 4:32PM', col4:'$ 1.750.00', col5:'$ 1.850.00',col6:'Canceled'},

  ];
  
  const columns = [
    { field: 'col1', headerName: 'Receipt', width: 200 },
    { field: 'col2', headerName: 'Receiver', width: 200},
    { field: 'col3', headerName: 'Payment Date', width: 200},
    { field: 'col4', headerName: 'Payment Method', width: 200 },
    { field: 'col5', headerName: 'Amount', width: 200 },
    { field: 'col6', headerName: 'Download All', width:200 },
  ];

export default function AllPayments(props){

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
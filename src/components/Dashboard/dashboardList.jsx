import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


export default function DashboardList(props) {
  return (
    <div>
    <p>{props.label} List</p>
    <div style={{ height: 200, width: '100%' }}>
      <DataGrid rows={props.rows} columns={props.columns} style={{backgroundColor:"white"}} />
    </div>
    </div>
  );
}

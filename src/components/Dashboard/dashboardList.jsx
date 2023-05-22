import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../../pages/Dashboard/dashboard.css";
import CardButton from "../buttons/cardButton";

export default function DashboardList(props) {
  return (
    <div className="list-container">
      <div className="list-header">
        <p className="list-label">{props.label} List</p>
        <CardButton id="" title="Filters" />
      </div>
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={props.rows}
          columns={props.columns}
          sx={{
            ".MuiDataGrid-columnSeparator": {
              display: "none",
            },
            ".MuiDataGrid-rowSeparator": {
              display: "none",
            },
            "&.MuiDataGrid-root": {
              border: "none",
            },
          }}
        />
      </div>
    </div>
  );
}

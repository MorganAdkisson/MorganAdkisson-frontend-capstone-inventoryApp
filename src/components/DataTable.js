import React from "react";
import MaterialTable from "@material-table/core";

function DataTable(props) {
  const tableColumns = [
    { title: "Facility", field: "facility" },
    { title: "Tank", field: "tank" },
    { title: "Family", field: "family" },
    { title: "Task Id", field: "task_id" },
    { title: "Inventory Date", field: "inv_date", type: "date" },
    { title: "Total Animals", field: "total_animals" },
    { title: "SL Measurements (mm)", field: "shell_lengths" },
  ];

  return (
    <div>
      <MaterialTable
        title={"Compiled Inventory Data"}
        columns={tableColumns}
        data={props.data}
        options={{
          exportButton: true,
        }}
      />
    </div>
  );
}

export default DataTable;

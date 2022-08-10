import React from "react";
import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";

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
          sorting: true,
          exportMenu: [
            {
              label: "Export CSV",
              exportFunc: (cols, datas) =>
                ExportCsv(cols, datas, "myCsvFileName"),
            },
            {
              label: "Export PDF",
              exportFunc: (cols, datas) =>
                ExportPdf(cols, datas, "myPdfFileName"),
            },
          ],
        }}
      />
    </div>
  );
}

export default DataTable;

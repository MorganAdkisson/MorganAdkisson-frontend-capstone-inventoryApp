import React from "react";
import DataTable from "./DataTable";

function Data(props) {
  return (
    <div>
      <DataTable data={props.data} />
    </div>
  );
}

export default Data;

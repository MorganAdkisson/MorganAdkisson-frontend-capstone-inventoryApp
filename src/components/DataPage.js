import React, { useEffect } from "react";
import DataTable from "./DataTable";

function Data(props) {
  useEffect(() => props.fetchData(), []);
  return (
    <div>
      <h1 style={{ fontSize: 30 }}>Compiled Inventory Table</h1>
      <DataTable data={props.data} />
    </div>
  );
}

export default Data;

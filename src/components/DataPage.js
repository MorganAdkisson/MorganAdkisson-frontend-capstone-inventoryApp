import React, { useEffect } from "react";
import DataTable from "./DataTable";

function Data(props) {
  useEffect(() => props.fetchData(), []);
  return (
    <div>
      <DataTable data={props.data} />
    </div>
  );
}

export default Data;

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Button } from "antd";
import PostAddIcon from "@mui/icons-material/PostAdd";

function Home(props) {
  useEffect(() => {
    props.fetchData();
  }, []);

  const SAMap = new Map();
  const PTMSCMap = new Map();
  for (const { facility, total_animals, task_id } of props.data) {
    if (facility === "SA") {
      const currSum = SAMap.get(task_id) || 0;
      SAMap.set(task_id, currSum + total_animals);
    }
    if (facility === "PTMSC") {
      const currSum = PTMSCMap.get(task_id) || 0;
      PTMSCMap.set(task_id, currSum + total_animals);
    }
  }
  const SAArray = Array.from(
    new Map([...SAMap.entries()].sort()),
    ([task_id, total_animals]) => ({
      task_id,
      total_animals,
    })
  );
  const PTMSCArray = Array.from(
    new Map([...PTMSCMap.entries()].sort()),
    ([task_id, total_animals]) => ({
      task_id,
      total_animals,
    })
  );
  console.log(SAArray, PTMSCArray);

  // const chartLabels = data.map((data) => data.task_id);
  // const invData = data.map((data) => data.total_animals);

  const chartData = {
    labels: SAArray.map((inv) => inv.task_id),
    datasets: [
      {
        label: "Seattle Aquarium",
        data: SAArray.map((inv) => inv.total_animals),
        backgroundColor: ["blue"],
      },
      {
        label: "Port Townsend Marine Science Center",
        data: PTMSCArray.map((inv) => inv.total_animals),
        backgroundColor: ["red"],
      },
    ],
  };

  return (
    <div>
      <Button
        type="dashed"
        href="/inventory"
        icon={<PostAddIcon />}
        style={{
          float: "right",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        Record New Inventory
      </Button>
      <h1 className="inv-header" style={{ fontSize: 30 }}>
        Inventory Dashboard
      </h1>
      <div style={{ background: "#fff", padding: 80, minHeight: 600 }}>
        <div>
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
}

export default Home;

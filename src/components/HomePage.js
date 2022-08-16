import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Button, Card, Space } from "antd";
import PostAddIcon from "@mui/icons-material/PostAdd";
import SAlogo from "../images/SA_logo_v02.png";
import PTMSClogo from "../images/PTMSC.png";

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

  const chartData = {
    labels: SAArray.map((inv) => inv.task_id),
    datasets: [
      {
        label: "Port Townsend Marine Science Center",
        data: PTMSCArray.map((inv) => inv.total_animals),
        backgroundColor: ["#B7D3E4"],
      },
      {
        label: "Seattle Aquarium",
        data: SAArray.map((inv) => inv.total_animals),
        backgroundColor: ["#C86A4E"],
      },
    ],
  };

  // const facilityCurrentTotals = {
  //   SA: SAArray[SAArray.length - 1]["total_animals"],
  //   PTMSC: PTMSCArray[PTMSCArray.length - 1]["total_animals"],
  // };

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
          borderRadius: "10px",
          borderWidth: "2px",
          height: "45px",
          lineHeight: "45px",
        }}
      >
        Record New Inventory
      </Button>
      <h1 className="inv-header" style={{ fontSize: 30 }}>
        Inventory Dashboard
      </h1>
      <div style={{ background: "#fff", padding: 80, minHeight: 600 }}>
        <div style={{ padding: "100px" }}>
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
}

export default Home;

//   <div
//     style={{
//       padding: "50px",
//       paddingBottom: "120px",
//       border: "1px solid rgba(0, 0, 0, 0.5)",
//       backgroundColor: "#D5D5D5",
//     }}
//   >
//     <Space
//       direction="horizontal"
//       size="middle"
//       style={{
//         display: "flex",
//         justifyContent: "space-evenly",
//       }}
//     >
//       <Card
//         bordered="true"
//         hoverable
//         style={{
//           width: 500,
//           height: 300,
//           backgroundColor: "#B7D3E4",
//           borderRadius: "15px",
//           borderWidth: "2px",
//         }}
//         cover={
//           <img
//             alt="PTMSC"
//             src={PTMSClogo}
//             style={{ padding: "80px 10px" }}
//           />
//         }
//       >
//         Latest Inventory Count:{" "}
//         <h1 style={{ fontSize: "50px", textAlign: "center" }}>
//           {facilityCurrentTotals["PTMSC"]}
//         </h1>
//       </Card>
//       <Card
//         hoverable
//         style={{
//           width: 500,
//           height: 300,
//           backgroundColor: "#C86A4E",
//           borderRadius: "15px",
//           borderWidth: "2px",
//         }}
//         cover={
//           <img
//             alt="Seattle Aquarium"
//             src={SAlogo}
//             style={{ padding: "15px 100px" }}
//           />
//         }
//       >
//         Latest Inventory Count:{" "}
//         <h1 style={{ fontSize: "50px", textAlign: "center" }}>
//           {facilityCurrentTotals["SA"]}
//         </h1>
//       </Card>
//     </Space>
//   </div>

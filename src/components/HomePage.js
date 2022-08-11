import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

function Home(props) {
  const [chartData, setChartData] = useState({});
  // const [SAInventoryTotals, setSAInventoryTotals] = useState({});

  const chart = () => {
    // const seaAquTotals = { ...SAInventoryTotals };
    let invId = [1, 2, 3, 4];
    let total = [123, 321, 456, 234];

    // for (const row in props.data) {
    //   invId.push(row.task_id);
    //   total.push(parseInt(row.total_animals));
    // }

    // setChartData({
    //   labels: invId,
    //   datasets: [
    //     {
    //       label: "totals per tank per inventory",
    //       data: total,
    //       backgroundColor: ["rgba(75, 192, 192, 0.6)"],
    //       borderWidth: 4,
    //     },
    //   ],
    // });
    //   if (row.facility === "SA") {
    //     if (row.task_id in invId) {
    //       seaAquTotals[row.task_id] = seaAquTotals[row.task_id] +=
    //         row.total_animals;
    //     } else {
    //       seaAquTotals[row.task_id] = row.total_animals;
    //     }
    //   }
    //   setSAInventoryTotals(seaAquTotals);
    // }

    // setChartData({
    //   labels: "total animals",
    //   datasets: [
    //     {
    //       label: Object.keys(seaAquTotals),
    //       data: Object.keys(seaAquTotals).map(function (key) {
    //         return seaAquTotals[key];
    //       }),
    //     },
    //   ],
    // });
  };

  // useEffect(() => {
  //   chart();
  // }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <Line
        data={chartData}
        options={{
          responsive: true,
          title: { text: "Totals", display: true },
          scales: {
            yAxes: [
              {
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 10,
                  beginAtZero: true,
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default Home;

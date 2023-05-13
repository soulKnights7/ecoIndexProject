import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
// import "./chartStyle.css"
const PieChart = ({ labels, data }) => {
  const chartData = {
    labels: labels,
    legend: {
      position: "bottom ",
    },
    datasets: [
      {
        data: data,
        backgroundColor: [
          "red",
          "blue",
          "green",
          "cyan",
          "magenta",
          "yellow",
          "black",
        ], // Specify custom colors for each slice
      },
    ],
  };
  const chartOptions = {
    legend: {
      position: "bottom",
    },
  };

  return (
    <div style={{ width: "300px", height: "400px" }}>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default PieChart;

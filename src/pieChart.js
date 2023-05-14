import React from "react";
import { Pie, Chart } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

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
        color: "white ",
        backgroundColor: [
          "#FEA1A1",
          "#41644A",
          "#263A29",
          "#FEE8B0",
          "#F97B22",
          "#FEE8B0",
          "#9CA777",
        ], // Specify custom colors for each slice
        borderColor: "black", // Set the outline color to black
        borderWidth: 2,
      },
    ],
  };
  const chartOptions = {
    plugins: {
      datalabels: {
        color: "black",
        font: {
          weight: "bold",
        },
        formatter: (value, context) => {
          return value;
        },
      },
      legend: {
        labels: {
          color: "white",
        },
      },
    },
  };

  return (
    <div style={{ width: "300px", height: "400px" }}>
      <Pie
        data={chartData}
        options={chartOptions}
        plugins={[ChartDataLabels]}
      />
    </div>
  );
};

export default PieChart;

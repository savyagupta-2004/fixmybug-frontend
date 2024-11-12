import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

const BeautifulLineChart = () => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Users Applied",
        data: [120, 150, 180, 200, 220, 250, 280],
        borderColor: "#3498db",
        backgroundColor: "rgba(52, 152, 219, 0.1)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#3498db",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 4,
      },
      {
        label: "Bugs Fixed",
        data: [80, 100, 120, 140, 160, 180, 200],
        borderColor: "#2ecc71",
        backgroundColor: "rgba(46, 204, 113, 0.1)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#2ecc71",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 4,
      },
      {
        label: "Bugs Not Fixed",
        data: [40, 50, 60, 60, 60, 70, 80],
        borderColor: "#e74c3c",
        backgroundColor: "rgba(231, 76, 60, 0.1)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#e74c3c",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "#333",
          fontSize: 14,
        },
      },
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        titleColor: "#333",
        bodyColor: "#333",
        borderColor: "#3498db",
        borderWidth: 1,
        displayColors: false,
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || "";
            const value = context.formattedValue;
            return `${label}: ${value}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          color: "#666",
          font: {
            size: 12,
            family: "'Roboto', sans-serif",
          },
        },
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        beginAtZero: true,
        min: 0,
        max: 300,
        ticks: {
          color: "#666",
          font: {
            size: 12,
            family: "'Roboto', sans-serif",
          },
          callback: (value) => value,
        },
      },
    },
    interaction: {
      intersect: false,
    },
    animation: {
      duration: 1000,
      easing: "easeInOutQuad",
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Introducing<span className="text-[#0c4a6e]"> FixmyBug</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <Line
            data={chartData}
            options={chartOptions}
            style={{ width: "100%", height: "400px" }}
          />
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Key Metrics
            </h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-600">Users Applied</span>
                <span className="text-2xl font-bold text-[#3498db]">478</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-600">Bugs Fixed</span>
                <span className="text-2xl font-bold text-[#2ecc71]">412</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-600">
                  Bugs Not Fixed
                </span>
                <span className="text-2xl font-bold text-[#e74c3c]">66</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Performance Highlights
            </h3>
            <ul className="space-y-4 list-none">
              <li className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-600">
                  25% Increase in User Applications
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-600">
                  20% Improvement in Bug Fix Rate
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-600">
                  Stable Number of Unresolved Bugs
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautifulLineChart;

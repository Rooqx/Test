import dynamic from "next/dynamic";
import { ChartData, ChartOptions } from "chart.js";

const RoundedBarChart = dynamic(
  () => import("@/Component/RoundedBarChart").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <p>Loading chart...</p>,
  }
);

export default function RoundedBarVisual() {
  const data: ChartData<"bar"> = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Income",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: "#6366f1",
        borderColor: "#6366f1",
        borderWidth: 2,
        borderRadius: 12,
        barPercentage: 0.7,
        categoryPercentage: 0.6,
      },
      {
        label: "Savings",
        data: [45, 39, 60, 71, 46, 35],
        backgroundColor: "#60a5fa",
        borderColor: "#60a5fa",
        borderWidth: 2,
        borderRadius: 12,
        barPercentage: 0.7,
        categoryPercentage: 0.6,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "#6366f1",
          font: { size: 16, weight: "bold" },
        },
      },
      tooltip: {
        backgroundColor: "#6366f1",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#6366f1",
        borderWidth: 1,
        padding: 12,
      },
    },
    scales: {
      x: {
        grid: {
          color: "#e0e7ff",
        },
        ticks: {
          color: "#6366f1",
          font: { size: 14 },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#6366f1",
          font: { size: 14 },
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full h-[300px] md:h-[400px] lg:h-[400px] p-2 fade-in-section">
      <RoundedBarChart data={data} options={options} />
    </div>
  );
}

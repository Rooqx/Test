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
        label: " ",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: "rgba(54, 162, 235, 0.7)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Savings",
        data: [45, 39, 60, 71, 46, 35],
        backgroundColor: "rgba(255, 99, 132, 0.7)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Monthly Sales with Rounded Bars",
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // removes vertical grid lines
          drawBorder: false, // removes x-axis line
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <main className="-mt-12 p-5 w-full">
      <div className="w-full mx-auto">
        <div className="w-full h-[500px] md:h-[200px]">
          <RoundedBarChart data={data} options={options} />
        </div>
      </div>
    </main>
  );
}

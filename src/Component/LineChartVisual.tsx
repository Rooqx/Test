import dynamic from "next/dynamic";
import { ChartData, ChartOptions } from "chart.js";

const LineChart = dynamic(
  () => import("@/Component/LineChart").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <p>Loading chart...</p>,
  }
);

export default function Home() {
  const data: ChartData<"line"> = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
    ],
    datasets: [
      {
        label: "Expenses",
        data: [650, 590, 800, 801, 506, 550, 700, 650, 800, 900],
        borderColor: "#6366f1",
        backgroundColor: "rgba(99,102,241,0.15)",
        borderWidth: 3,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#6366f1",
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
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
          display: false,
        },
        ticks: {
          color: "#6366f1",
          font: { size: 14 },
        },
      },
      y: {
        grid: {
          display: false, // Hide y-axis grid lines
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
      <LineChart data={data} options={options} />
    </div>
  );
}

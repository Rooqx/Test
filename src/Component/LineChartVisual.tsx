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
        data: [650, 590, 800, 801, 506, 550],
        borderColor: "rgb(255, 102, 102)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 1,
        tension: 0.3,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <main className="w-[100vw] h-full p-5 -mt-10">
      <div className="w-[1500px] h-[200px] px-4">
        {" "}
        {/* Full width with some padding */}
        <LineChart data={data} options={options} />
      </div>
    </main>
  );
}

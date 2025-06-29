"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const roundedBarsPlugin = {
  id: "roundedBars",
  beforeDraw: (chart: any) => {
    const ctx = chart.ctx;
    chart.data.datasets.forEach((dataset: any, i: number) => {
      const meta = chart.getDatasetMeta(i);
      meta.data.forEach((bar: any) => {
        const { x, y, width, height } = bar;
        ctx.beginPath();
        ctx.moveTo(x + 6, y);
        ctx.lineTo(x + width - 6, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + 6);
        ctx.lineTo(x + width, y + height);
        ctx.lineTo(x, y + height);
        ctx.lineTo(x, y + 6);
        ctx.quadraticCurveTo(x, y, x + 6, y);
        ctx.fill();
      });
    });
  },
};

interface RoundedBarChartProps {
  data: ChartData<"bar">;
  options?: ChartOptions<"bar">;
}

export default function RoundedBarChart({
  data,
  options,
}: RoundedBarChartProps) {
  return <Bar data={data} options={options} plugins={[roundedBarsPlugin]} />;
}

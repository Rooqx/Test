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
  Plugin,
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

const roundedBarsPlugin: Plugin<"bar"> = {
  id: "roundedBars",
  afterDatasetsDraw: (chart) => {
    const ctx = chart.ctx;
    chart.data.datasets.forEach((dataset, i) => {
      const meta = chart.getDatasetMeta(i);
      meta.data.forEach((bar) => {
        const { x, y, width, height } = bar.getProps(
          ["x", "y", "width", "height"],
          true
        );
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x + 6, y);
        ctx.lineTo(x + width - 6, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + 6);
        ctx.lineTo(x + width, y + height);
        ctx.lineTo(x, y + height);
        ctx.lineTo(x, y + 6);
        ctx.quadraticCurveTo(x, y, x + 6, y);
        ctx.fillStyle =
          (bar.options &&
            (bar.options as { backgroundColor?: string }).backgroundColor) ||
          (dataset as { backgroundColor?: string }).backgroundColor ||
          "#000";
        ctx.fill();
        ctx.restore();
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

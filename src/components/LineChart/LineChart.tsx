import useJob from "@/hook/useJob";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import ChartTitle from "./ChartTitle";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const jobChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Number of Job",
    },
  },
};

const salaryChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Average Salary",
    },
  },
};

const LineChart = () => {
  const data = useJob();

  const labels = [2020, 2021, 2022, 2023, 2024];

  const jobChartData = {
    labels,
    datasets: [
      {
        label: "Number of Job",
        data: data.map((i) => Number(i.totalJob)),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const salaryChartData = {
    labels,
    datasets: [
      {
        label: "Average Salary",
        data: data.map((i) => i.averageSalary),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center md:w-4/5 md:flex-row md:justify-around">
      <div className="h-64 w-full md:h-96 md:w-1/2">
        <Line
          options={jobChartOptions}
          data={jobChartData}
          className=""
        />
        <ChartTitle title="Number of Jobs per year" />
      </div>
      <div className="h-64 w-full md:h-96 md:w-1/2">
        <Line
          options={salaryChartOptions}
          data={salaryChartData}
          className=""
        />
        <ChartTitle title="Average Salary per year" />
      </div>
    </div>
  );
};

export default LineChart;

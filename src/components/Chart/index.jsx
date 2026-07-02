import Chart from "react-apexcharts";

const options = {
  labels: ["Expense", "Income"],
  colors: ["pink", "skyblue"],

  chart: {
    type: "pie",
  },

  legend: {
    show: false,
  },

  dataLabels: {
    enabled: false,
  },

  tooltip: {
    enabled: true,
    theme: "dark",
  },
};

export default function TransactionChartSummary({
  expense = 100,
  income = 100,
}) {
  return (
    <Chart
      options={options}
      series={[expense, income]}
      type="pie"
      width="100%"
      height="100%"
    />
  );
}
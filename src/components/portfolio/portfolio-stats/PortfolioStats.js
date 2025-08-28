import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";
import { useSelector } from "react-redux";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#82ca9d",
  "#8884d8",
];

const convertChartData = (portfolios) => {
  const dateMapper = {};
  var assets = new Set();
  let date;
  for (let portfolio of portfolios) {
    date = portfolio.date;
    dateMapper[date] = { date: date, total: 0 };
    for (let investment of portfolio.investments) {
      assets.add(investment.asset);
      if (!dateMapper[date][investment.asset]) {
        dateMapper[date][investment.asset] = 0;
      }
      dateMapper[date][investment.asset] += Number(investment.amount);
      dateMapper[date].total += Number(investment.amount);
    }
  }
  const chartData = Object.values(dateMapper);
  const latestPortfolio = dateMapper[date];
  assets = Array.from(assets).sort(
    (a, b) => latestPortfolio[b] - latestPortfolio[a]
  );
  return { chartData, assets };
};
function PortfolioStats() {
  const portfolios = useSelector((store) => store.portfolioSnapshots);
  const { chartData, assets } = convertChartData(portfolios);
  console.log(chartData);
  return (
    <div>
      <h4>Stats chart</h4>
      <BarChart
        width={700}
        height={600}
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis
          label={{
            value: "amount in K",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <Tooltip itemSorter={(item) => item.value} />
        <Legend />
        {assets.map((asset, index) => (
          <Bar stackId="a" dataKey={asset} fill={COLORS[index % COLORS.length]}>
            {(index+1 === assets.length) && <LabelList dataKey="total" position="top" />}
          </Bar>
        ))}
      </BarChart>
    </div>
  );
}

export default PortfolioStats;

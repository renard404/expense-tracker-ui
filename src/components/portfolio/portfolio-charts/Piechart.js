import { Cell, Pie, PieChart } from "recharts";
import { memo } from "react";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
function Piechart({ meta }) {
  meta = meta.sort((e1, e2) => e1.amount - e2.amount)
  return (
    <div className="content">
      <PieChart width={500} height={500}>
        <Pie
          data={meta}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="amount"
          label={({asset, percentage})=> `${asset}(${percentage}%)`}
        >
          {meta.map((entry, index) => (
            <Cell
              key={`cell-${entry.asset}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
          <text
            x={250}
            y={250}
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: "16px", fontWeight: "bold" }}
          >
            Total: {meta.reduce((sum, data)=> sum+data.amount, 0)}
          </text>
        </Pie>
      </PieChart>
    </div>
  );
}

export default memo(Piechart);

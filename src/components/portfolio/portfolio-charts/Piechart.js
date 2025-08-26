import { Cell, Pie, PieChart } from "recharts";
import { memo } from "react";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
function Piechart({ meta }) {
  return (
    <div>
      <PieChart width={300} height={300}>
        <Pie
          data={meta}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="amount"
          label={({asset})=> asset}
        >
          {meta.map((entry, index) => (
            <Cell
              key={`cell-${entry.asset}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}

export default memo(Piechart);

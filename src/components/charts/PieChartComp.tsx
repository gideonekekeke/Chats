
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
	{ name: "Group A", value: 400 },
	{ name: "Group B", value: 300 },
	{ name: "Group C", value: 300 },
	{ name: "Group D", value: 200 },
	{ name: "Group E", value: 120 },
	{ name: "Group F", value: 510 },
	{ name: "Group G", value: 458 },
	{ name: "Group H", value: 230 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
}: any) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill='white'
			textAnchor={x > cx ? "start" : "end"}
			dominantBaseline='central'>
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};
const PieChartComp = () => {
	return (
		<div
			style={{
				width: "500px",
				height: "500px",
			}}>
			<ResponsiveContainer width='100%' height='100%'>
				<PieChart width={700} height={700}>
					<Pie
						data={data}
						cx='70%'
						cy='70%'
						labelLine={false}
						label={renderCustomizedLabel}
						outerRadius={150}
						fill='#8884d8'
						dataKey='value'>
						{data.map((entry: any, index) => (
							<>
								<div>{entry}</div>
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index % COLORS.length]}
								/>
							</>
						))}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
};

export default PieChartComp;

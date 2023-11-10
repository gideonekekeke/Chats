
import {
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
    Area,
	ResponsiveContainer,
    AreaChart
} from "recharts";
// 
// const data = [
	// {
		// name: "Ike",
		// backend: 4000,
		// pv: 2400,
		// amt: 2400,
	// },
	// {
		// name: "Page B",
		// uv: 3000,
		// pv: 1398,
		// amt: 2210,
	// },
	// {
		// name: "Page C",
		// uv: 2000,
		// pv: 9800,
		// amt: 2290,
	// },
	// {
		// name: "Page D",
		// uv: 2780,
		// pv: 3908,
		// amt: 2000,
	// },
	// {
		// name: "Page E",
		// uv: 1890,
		// pv: 4800,
		// amt: 2181,
	// },
	// {
		// name: "Page F",
		// uv: 2390,
		// pv: 3800,
		// amt: 2500,
	// },
	// {
		// name: "Page G",
		// uv: 3490,
		// pv: 4300,
		// amt: 2100,
	// },
// ];

const SimpleLineChart = () => {
	const student = [
		"Ike",
		"Kome",
		"Godwin",
		"Babatunde",
		"Tosin",
		"Amara",
		"Pepe",
		"Fathia",
		"Roqeebah",
	];

	const randomGen = (arr: Array<string>) => {
		const data = [];
		for (let i = 0; i < arr.length; i++) {
			data.push({
				name: arr[i],
				frontEndScore: Math.floor(Math.random() * 100),
				backEndScore: Math.floor(Math.random() * 100),
			});
		}

		return data;
	};

	const result = randomGen(student)
    console.log("this is result", result);

	return (
		<div
			style={{
				width: "700px",
				height: "400px",
			}}>
			<ResponsiveContainer width='100%' height='100%'>
				<AreaChart
					width={500}
					height={300}
					data={result}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />
					<YAxis />
					<Tooltip />
					<Legend />
					<Area
						type='monotone'
						dataKey='backEndScore'
						stackId='1'
						stroke='#8884d8'
						fill='#8884d8'
					/>
					<Area
						type='monotone'
						dataKey='frontEndScore'
						stackId='1'
						stroke='#82ca9d'
						fill='#82ca9d'
					/>

				
				
				
				
				
				
				
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default SimpleLineChart;

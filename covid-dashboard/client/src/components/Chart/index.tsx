import React from 'react';
import { useSelector } from 'react-redux';

import { Line } from 'react-chartjs-2';

const Chart = () => {
	const data = useSelector(
		(state: any) => state.targetTimeseriesCountry.timeseries
	);
	return (
		<div className="mt-5">
			{data && (
				<Line
					data={{
						labels: Object.keys(data),
						datasets: [
							{
								data: Object.keys(data)?.map(key => data[key].confirmed),
								label: 'confirmed',
								borderColor: '#512da8',
								fill: false,
							},
							{
								data: Object.keys(data)?.map(key => data[key].deaths),
								label: 'deaths',
								borderColor: '#e91e63',
								fill: false,
							},
							{
								data: Object.keys(data)?.map(key => data[key].recovered),
								label: 'recovered',
								borderColor: '#009688',
								fill: false,
							},
						],
					}}
					options={{
						legend: {
							display: true,
							position: 'bottom',
						},
					}}
				/>
			)}
		</div>
	);
};

export default Chart;

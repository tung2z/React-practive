import * as React from 'react';

interface ITableProps {
	datas: any[];
	keys: string[];
}

const Table: React.FunctionComponent<ITableProps> = props => {
	const { datas, keys } = props;
	return (
		<table className="table table-striped">
			<thead>
				<tr>
					{keys.map((item, index) => (
						<th scope="col" key={index}>{item}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{datas.map((data, i) => (
					<tr key={i}>
						{Object.keys(data).map((item, index) => (
							<td key={index}>{data[item]}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;

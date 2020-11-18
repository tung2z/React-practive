import _ from 'lodash';
import * as React from 'react';

interface ISearchProps {
	keys: string[],
	renderSearch: (e: any) => void
}

const Search: React.FunctionComponent<ISearchProps> = props => {
	const {keys, renderSearch} = props
	return (
		<div className="form-inline">
			<div className="input-group mb-3 mr-1">
				<div className="input-group-prepend">
					<span className="input-group-text">
						Search
					</span>
				</div>
				<input
					type="text"
					className="form-control"
					placeholder="Enter anything..."
					onChange={e => renderSearch(e)}
				/>
			</div>
			<div className="input-group mb-3">
				<div className="input-group-prepend">
					<label className="input-group-text" htmlFor="sort">
						Sort by
					</label>
				</div>
				<select className="custom-select" id="sort" onChange={e => renderSearch(e)}>
					{
						keys.map((key, index) => <option value={_.camelCase(key)} key={index}>{key}</option>)
					}
				</select>
			</div>
		</div>
	);
};

export default Search;


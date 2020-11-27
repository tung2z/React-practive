/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';

interface IPaginationProps {}

const Pagination: React.FunctionComponent<IPaginationProps> = props => {
	return (
		<nav aria-label="...">
			<ul className="pagination">
				<li className="page-item disabled">
					<a className="page-link" href="#">
						Previous
					</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="#">
						1
					</a>
				</li>
				<li className="page-item active" aria-current="page">
					<a className="page-link" href="#">
						2 <span className="sr-only">(current)</span>
					</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="#">
						3
					</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="#">
						Next
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;

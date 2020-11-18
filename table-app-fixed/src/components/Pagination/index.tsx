import * as React from 'react';
import './Pagination.css'

interface IPaginationProps {
	currentPage: number;
	totalItem: number;
  pageSize: number;
  renderPagi: (index: number) => void
}

const Pagination: React.FunctionComponent<IPaginationProps> = props => {

  const {currentPage, totalItem, pageSize, renderPagi} = props

	return (
		<div className="pagination">
			<nav aria-label="Page navigation example">
				<ul className="pagination">
					<li
						className={`page-item ${currentPage === 0 && 'disabled'}`}
						onClick={() =>renderPagi(currentPage - 1)}
					>
						<p className="page-link">Previous</p>
					</li>
					{new Array(Math.ceil(totalItem / pageSize))
						.fill(0)
						.map((item, index) => (
							<li
								className={`page-item  ${index === currentPage && 'active'}`}
								key={index}
							>
								<p className="page-link" onClick={() => renderPagi(index)}>
									{index + 1}
								</p>
							</li>
						))}

					<li
						className={`page-item ${
							currentPage >= Math.ceil(totalItem / pageSize) - 1 &&
							'disabled'
						}`}
						onClick={() => renderPagi(currentPage + 1)}
					>
						<p className="page-link">Next</p>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Pagination;

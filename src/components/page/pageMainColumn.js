import React from 'react';
// Addon dependencies imported
// import { isEmpty } from '../../utils';
// import HTMLparse from 'html-react-parser';

// Utilized components imported
// import SomeComp from './';

const PageMainColumn = ({ children }) => {
	// console.log('>> TEST RENDER PAGE_MAIN_COLUMN:', children);

	// const handleSomething = () => {
	// 	console.log('>>');
	// };
	// <SomeComp handleSomething={handleSomething} />

	return (
		<section
			className="page-main-column section section--gradient"
			style={{ padding: `3rem 0` }}
		>
			<div
				className="container"
				style={{
					// border: `1px solid green`,
					position: 'relative',
					top: `-400px`,
				}}
			>
				<div className="columns">
					<div className="column is-10 is-offset-1">
						<div className="section">
							<div
								className="page-content-container"
								style={{
									backgroundColor: `white`,
									padding: `2rem`,
									boxShadow: `2px 2px 5px #777`,
								}}
							>
								{children}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PageMainColumn;

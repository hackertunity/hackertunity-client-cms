import React from 'react';
// Addon dependencies imported
// import { isEmpty } from '../../utils';
// import HTMLparse from 'html-react-parser';

// Utilized components imported
// import SomeComp from './';

const PageTitle = ({ title }) => {
	// console.log('>> TEST RENDER PAGE_TITLE:', title);

	return (
		<div
			className="page-title title is-size-2 has-text-weight-bold is-bold-light"
			style={{
				backgroundColor: `#688d9c`,
				color: `white`,
				padding: `1rem 1rem 1rem 6rem`,
				opacity: `.85`,
				position: `relative`,
				top: `-350px`,
			}}
		>
			<h2
				className="column is-10 is-offset-1"
				style={{
					position: `relative`,
					padding: `0 0 0 2rem`,
				}}
			>
				{title}
			</h2>
		</div>
	);
};

export default PageTitle;

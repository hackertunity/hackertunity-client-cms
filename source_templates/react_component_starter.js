import React from 'react';
// Addon dependencies imported
// import { isEmpty } from '../../utils';
// import HTMLparse from 'html-react-parser';

// Utilized components imported
// import SomeComp from './';

const ComponentName = ({ someNode }) => {
	console.log('>> TEST RENDER SOME_COMPONENT:', someNode);

	// const handleSomething = () => {
	// 	console.log('>>');
	// };
	// <SomeComp handleSomething={handleSomething} />

	return (
		<>
			<h1>SOME_COMPONENT IS_WORKING</h1>
		</>
	);
};

export default ComponentName;

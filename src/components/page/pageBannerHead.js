import React from 'react';
// Addon dependencies imported
// import { isEmpty } from '../../utils';
// import HTMLparse from 'html-react-parser';

// Utilized components imported
import PageTitle from './pageTitle';

const PageBannerHead = ({ image, title }) => {
	// console.log('>> TEST RENDER PAGE_BANNER_HEAD:', image, title);

	// const handleSomething = () => {
	// 	console.log('>>');
	// };
	// <SomeComp handleSomething={handleSomething} />

	return (
		<div className="page-banner-head">
			<div
				className="full-width-image margin-top-0"
				style={{
					backgroundImage: `url(${
						image ? (!!image.childImageSharp ? image.childImageSharp.fluid.src : image) : ''
					})`,
					backgroundPosition: `top left`
				}}
			></div>
			<PageTitle title={title} />
		</div>
	);
};

export default PageBannerHead;

import React from 'react';
// Addon dependencies imported
// import { isEmpty } from '../../utils';
// import HTMLparse from 'html-react-parser';

// Utilized components imported
// import SomeComp from './';

const TrainingResources = ({ trainingCategories }) => {
	console.log('>> TEST RENDER TRAINING_RESOURCES:', trainingCategories);

	// const handleSomething = () => {
	// 	console.log('>>');
	// };
	// <SomeComp handleSomething={handleSomething} />

	return (
		<div className="training-resources-categories">
			{trainingCategories.map((group, i) => {
				return (
					<div className="training resources category" key={i}>
						<h1 className="category-name">{group.categoryName}</h1>
						<p className="category-overview">{group.categoryOverview}</p>
						{group.trainingResources.map((entry, i) => {
							return (
								<div className="training resource" key={i}>
									<a
										className="link-to-resource"
										href={entry.resourceUrl}
										target="_blank"
									>
										<h2>{entry.resourceTitle}</h2>
									</a>
									<div className="about-resource">
										{entry.aboutResource}
									</div>
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

export default TrainingResources;

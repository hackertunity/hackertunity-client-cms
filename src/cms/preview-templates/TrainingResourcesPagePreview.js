import React from 'react';
import PropTypes from 'prop-types';
import { TrainingResourcesPageTemplate } from '../../templates/training-resources-page';

const TrainResPagePreview = ({ entry, getAsset, widgetFor }) => {
	const data = entry.getIn(['data']).toJS();

	if (data) {
		return (
			<TrainingResourcesPageTemplate
				image={getAsset(data.image)}
				title={data.title}
				content={widgetFor('body')}
				trainingCategories={data.trainingCategories}
			/>
		);
	} else {
		return <div>Loading...</div>;
	}
};

TrainResPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	getAsset: PropTypes.func,
	widgetFor: PropTypes.func,
};

export default TrainResPagePreview;

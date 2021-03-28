import React from 'react';
import PropTypes from 'prop-types';
import { TrainingResourcesPageTemplate } from '../../templates/training-resources-page';

const TrainResPagePreview = ({ entry }) => {
	return (
		<TrainingResourcesPageTemplate title={entry.getIn(['data', 'title'])} />
	);
};

TrainResPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	// getAsset: PropTypes.func,
};

export default TrainResPagePreview;

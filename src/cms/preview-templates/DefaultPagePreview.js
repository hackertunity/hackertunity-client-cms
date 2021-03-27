import React from 'react';
import PropTypes from 'prop-types';
import { DefaultPageTemplate } from '../../templates/default-page';

const DefaultPagePreview = ({ entry }) => {
	return <DefaultPageTemplate title={entry.getIn(['data', 'title'])} />;
};

DefaultPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	// getAsset: PropTypes.func,
};

export default DefaultPagePreview;

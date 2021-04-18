import React from 'react';
import PropTypes from 'prop-types';
import { DefaultPageTemplate } from '../../templates/default-page';

const DefaultPagePreview = ({ entry, getAsset, widgetFor }) => {
	const data = entry.getIn(['data']).toJS();

	if (data) {
		return (
			<DefaultPageTemplate
				image={getAsset(data.image)}
				title={data.title}
				content={widgetFor('body')}
			/>
		);
	} else {
		return <div>Loading...</div>;
	}
};

DefaultPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	getAsset: PropTypes.func,
};

export default DefaultPagePreview;

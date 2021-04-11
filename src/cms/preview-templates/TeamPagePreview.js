import React from 'react';
import PropTypes from 'prop-types';
import { TeamPageTemplate } from '../../templates/team-page';

const TeamPagePreview = ({ entry, getAsset, widgetFor }) => {
	const data = entry.getIn(['data']).toJS();

	if (data) {
		return (
			<TeamPageTemplate
				image={getAsset(data.image)}
				title={data.title}
				content={widgetFor('body')}
			/>
		);
	} else {
		return <div>Loading...</div>;
	}
};

TeamPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	getAsset: PropTypes.func,
	widgetFor: PropTypes.func,
};

export default TeamPagePreview;

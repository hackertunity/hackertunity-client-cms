import React from 'react';
import PropTypes from 'prop-types';
import { TeamPageTemplate } from '../../templates/team-page';

const TeamPagePreview = ({ entry }) => {
	return <TeamPageTemplate title={entry.getIn(['data', 'title'])} />;
};

TeamPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	// getAsset: PropTypes.func,
};

export default TeamPagePreview;

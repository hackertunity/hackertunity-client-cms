import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Content, { HTMLContent } from '../components/Content';

import Layout from '../components/Layout';
import PageBannerHead from '../components/page/pageBannerHead';
import PageMainColumn from '../components/page/pageMainColumn';

import TrainingResources from '../components/training/resources';

export const TrainingResourcesPageTemplate = ({
	title,
	image,
	content,
	contentComponent,
	// trainging resources here
}) => {
	const PageContent = contentComponent || Content;

	return (
		<div className="team-page">
			<PageBannerHead image={image} title={title} />

			<PageMainColumn>
				<PageContent className="content" content={content} />

				<TrainingResources />
			</PageMainColumn>
		</div>
	);
};

TrainingResourcesPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func,
};

const TrainingResourcesPage = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<TrainingResourcesPageTemplate
				contentComponent={HTMLContent}
				title={post.frontmatter.title}
				content={post.html}
			/>
		</Layout>
	);
};

TrainingResourcesPage.propTypes = {
	data: PropTypes.object.isRequired,
};

export default TrainingResourcesPage;

export const TrainResPageQuery = graphql`
	query TrainResPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
			}
		}
	}
`;

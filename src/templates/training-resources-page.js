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
	trainingCategories,
}) => {
	const PageContent = contentComponent || Content;

	return (
		<div className="team-page">
			<PageBannerHead image={image} title={title} />

			<PageMainColumn>
				<PageContent className="content" content={content} />

				<TrainingResources trainingCategories={trainingCategories} />
			</PageMainColumn>
		</div>
	);
};

TrainingResourcesPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
				image={post.frontmatter.image}
				content={post.html}
				trainingCategories={post.frontmatter.trainingCategories}
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
			id
			html
			frontmatter {
				title
				image {
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				trainingCategories {
					categoryName
					categoryOverview
					trainingResources {
						resourceTitle
						resourceUrl
						aboutResource
					}
				}
			}
		}
	}
`;

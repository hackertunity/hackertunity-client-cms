import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Content, { HTMLContent } from '../components/Content';

import Layout from '../components/Layout';
import PageBannerHead from '../components/page/pageBannerHead';
import PageMainColumn from '../components/page/pageMainColumn';
import DonateButton from '../components/get-involved/donate-button';
import VolunteerForm from '../components/get-involved/volunteer-form';

export const DefaultPageTemplate = ({ title, image, content, contentComponent }) => {
	const PageContent = contentComponent || Content;

	const determinePageSupplement = () => {
		if (title === 'Donate') {
			// ADD DONATE BUTTON
			return <DonateButton />;
		} else if (title === 'Volunteer') {
			return <VolunteerForm />;
		} else {
			return null;
		}
	};

	return (
		<div className="default-page">
			<PageBannerHead image={image} title={title} />

			<PageMainColumn>
				<PageContent className="content" content={content} />

				{determinePageSupplement()}
			</PageMainColumn>
		</div>
	);
};

DefaultPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	content: PropTypes.string,
	contentComponent: PropTypes.func
};

const DefaultPage = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<DefaultPageTemplate
				contentComponent={HTMLContent}
				title={post.frontmatter.title}
				image={post.frontmatter.image}
				content={post.html}
			/>
		</Layout>
	);
};

DefaultPage.propTypes = {
	data: PropTypes.object.isRequired
};

export default DefaultPage;

export const DefaultPageQuery = graphql`
	query DefaultPage($id: String!) {
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
			}
		}
	}
`;

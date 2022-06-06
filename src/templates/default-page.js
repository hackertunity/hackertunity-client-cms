import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Content, { HTMLContent } from '../components/Content';

import Layout from '../components/Layout';
import PageBannerHead from '../components/page/pageBannerHead';
import PageMainColumn from '../components/page/pageMainColumn';

export const DefaultPageTemplate = ({ title, image, content, contentComponent }) => {
	const PageContent = contentComponent || Content;

	let PageSupplement;

	if (title === 'Donate') {
		// ADD DONATE BUTTON
		PageSupplement = (
			<>
				<h3 style={{ display: 'inline', padding: '10px' }}>Donate on Paypal -></h3>
				<form
					style={{ display: 'inline', position: 'relative', top: '8px' }}
					action="https://www.paypal.com/donate"
					method="post"
					target="_top"
				>
					<input type="hidden" name="hosted_button_id" value="CG8RZWMAQ8DDG" />
					<input
						type="image"
						src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
						border="0"
						name="submit"
						title="PayPal - The safer, easier way to pay online!"
						alt="Donate with PayPal button"
					/>
					<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
				</form>
			</>
		);
	}

	return (
		<div className="default-page">
			<PageBannerHead image={image} title={title} />

			<PageMainColumn>
				<PageContent className="content" content={content} />

				{PageSupplement}
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

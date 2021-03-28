import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

export const IndexPageTemplate = ({ image, tagline }) => (
	<div>
		<div
			className="full-width-image margin-top-0"
			style={{
				backgroundImage: `url(${
					!!image.childImageSharp ? image.childImageSharp.fluid.src : image
				})`,
				backgroundPosition: `top left`,
				backgroundAttachment: `fixed`,
				backgroundSize: `100%`,
			}}
		>
			<div
				style={{
					display: 'flex',
					width: `450px`,
					height: '150px',
					lineHeight: '1',
					justifyContent: 'space-around',
					alignItems: 'left',
					flexDirection: 'column',
					// border: `1px solid blue`,
				}}
			>
				<h1
					className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
					style={{
						lineHeight: '1',
						padding: '0.25em',
					}}
				>
					{tagline}
				</h1>
			</div>
		</div>
	</div>
);

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	tagline: PropTypes.string,
};

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				tagline={frontmatter.tagline}
			/>
		</Layout>
	);
};

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				tagline
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

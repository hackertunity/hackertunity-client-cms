import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import logo from '../img/brand/hackertunity_logo.png';
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
					width: `730px`,
					height: '250px',
					lineHeight: '1',
					justifyContent: 'space-around',
					alignItems: 'left',
					flexDirection: 'row',
					// border: `1px solid blue`,
				}}
			>
				<img src={logo} alt="Hackertunity" style={{ width: "14em", height: "14em", order: 1 }} />
				<h1
					className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
					style={{
						lineHeight: '1',
						padding: '0.75em 0.25em',
						order: 2
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
		<Layout
			isHomePage={true}>
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

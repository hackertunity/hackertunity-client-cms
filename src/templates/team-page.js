import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const TeamPageTemplate = ({
	title,
	image,
	content,
	contentComponent,
}) => {
	const PageContent = contentComponent || Content;

	console.log('>> TEST:', image);

	return (
		<div>
			<div
				className="full-width-image margin-top-0"
				style={{
					backgroundImage: `url(${
						!!image.childImageSharp
							? image.childImageSharp.fluid.src
							: image
					})`,
					backgroundPosition: `top left`,
					backgroundAttachment: `fixed`,
				}}
			></div>

			<section
				className="section section--gradient"
				style={{ padding: `3rem 0` }}
			>
				<h2
					className="title is-size-3 has-text-weight-bold is-bold-light"
					style={{
						backgroundColor: `#688d9c`,
						color: `white`,
						padding: `1rem 1rem 1rem 6rem`,
						opacity: `.85`,
						position: 'relative',
						top: `-400px`,
					}}
				>
					{title}
				</h2>

				<div
					className="container"
					style={{
						// border: `1px solid green`,
						position: 'relative',
						top: `-400px`,
					}}
				>
					<div className="columns">
						<div className="column is-10 is-offset-1">
							<div className="section">
								<div
									className="page-content-container"
									style={{
										backgroundColor: `white`,
										padding: `2rem`,
										boxShadow: `2px 2px 5px #777`,
									}}
								>
									<PageContent className="content" content={content} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

TeamPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	content: PropTypes.string,
	contentComponent: PropTypes.func,
};

const TeamPage = ({ data }) => {
	const { markdownRemark: post } = data;

	console.log('>> TEST TEAM PAGE FM:', post);

	return (
		<Layout>
			<TeamPageTemplate
				contentComponent={HTMLContent}
				title={post.frontmatter.title}
				image={post.frontmatter.image}
				content={post.html}
			/>
		</Layout>
	);
};

TeamPage.propTypes = {
	data: PropTypes.object.isRequired,
};

export default TeamPage;

export const TeamPageQuery = graphql`
	query TeamPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
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

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

const TeamGroup = ({ group }) => {
	if (group.teamMembers) {
		return (
			<div>
				{group.teamMembers.map((member, i) => {
					let childImageSharp = member.profilePicture.childImageSharp;
					let picSrc = childImageSharp
						? childImageSharp.fixed.src
						: member.profilePicture;
					return (
						<div key={i}>
							<img src={picSrc} alt={member.profileName} />
							<h3>
								{member.profileName},&nbsp;{member.profileTitle}
							</h3>
							<p>{member.profileBlurb}</p>
						</div>
					);
				})}
			</div>
		);
	}
	return <p>No Members...</p>;
};

export const TeamPageTemplate = ({
	title,
	image,
	content,
	contentComponent,
	organization,
}) => {
	const PageContent = contentComponent || Content;

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
				<div
					className="page-title title is-size-2 has-text-weight-bold is-bold-light"
					style={{
						backgroundColor: `#688d9c`,
						color: `white`,
						padding: `1rem 1rem 1rem 6rem`,
						opacity: `.85`,
						position: `relative`,
						top: `-400px`,
					}}
				>
					<h2
						className="column is-10 is-offset-1"
						style={{
							position: `relative`,
							padding: `0 0 0 2rem`,
						}}
					>
						{title}
					</h2>
				</div>

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

									{organization.teamGroups.map((group, i) => {
										return (
											<div key={i}>
												<h1>{group.teamName}</h1>
												<TeamGroup group={group} />
											</div>
										);
									})}
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

	return (
		<Layout>
			<TeamPageTemplate
				contentComponent={HTMLContent}
				title={post.frontmatter.title}
				image={post.frontmatter.image}
				content={post.html}
				organization={post.frontmatter.organization}
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
				organization {
					teamGroups {
						groupType
						showGroup
						teamName
						teamMembers {
							profilePicture {
								childImageSharp {
									fixed {
										src
									}
								}
							}
							profileBlurb
							profileName
							profileTitle
							showProfile
						}
					}
				}
			}
		}
	}
`;

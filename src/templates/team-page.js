import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Content, { HTMLContent } from '../components/Content';

import Layout from '../components/Layout';
import PageBannerHead from '../components/page/pageBannerHead';

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
			<PageBannerHead image={image} title={title} />

			<section
				className="section section--gradient"
				style={{ padding: `3rem 0` }}
			>
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

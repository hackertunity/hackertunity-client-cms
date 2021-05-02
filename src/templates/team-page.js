import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Content, { HTMLContent } from '../components/Content';

import Layout from '../components/Layout';
import PageBannerHead from '../components/page/pageBannerHead';
import PageMainColumn from '../components/page/pageMainColumn';

import TeamGroup from '../components/team/group';

export const TeamPageTemplate = ({
	title,
	image,
	content,
	contentComponent,
	organization,
}) => {
	const PageContent = contentComponent || Content;

	return (
		<div className="team-page">
			<PageBannerHead image={image} title={title} />

			<PageMainColumn>
				<PageContent className="content" content={content} />

				{organization.teamGroups.map((group, i) => {
					return (
						<div className="group members" key={i}>
							<TeamGroup group={group} />
						</div>
					);
				})}
			</PageMainColumn>
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

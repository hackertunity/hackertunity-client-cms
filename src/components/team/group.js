import React from 'react';
// Addon dependencies imported
// import { isEmpty } from '../../utils';
// import HTMLparse from 'html-react-parser';

// Utilized components imported
// import SomeComp from './';

const TeamGroup = ({ group }) => {
	// console.log('>> TEST RENDER TEAM_GROUP:', group);

	// const handleSomething = () => {
	// 	console.log('>>');
	// };
	// <SomeComp handleSomething={handleSomething} />

	if (group.teamMembers) {
		return (
			<div className="content-card">
				<h1 className="cotnent-card-header">{group.teamName}</h1>

				{group.teamMembers.map((member, i) => {
					let childImageSharp = member.profilePicture.childImageSharp;
					let picSrc = childImageSharp
						? childImageSharp.fixed.src
						: member.profilePicture;
					return (
						<div className="group team-member" key={i}>
							<img
								className="group team-member-avatar"
								src={picSrc}
								alt={member.profileName}
							/>
							<h3 className="group team-member-title">
								{member.profileName},&nbsp;{member.profileTitle}
							</h3>
							<p className="group team-member-profile">
								{member.profileBlurb}
							</p>
						</div>
					);
				})}
			</div>
		);
	}

	return <></>;
};

export default TeamGroup;

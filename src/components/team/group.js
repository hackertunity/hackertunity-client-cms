import React from 'react';
// Addon dependencies imported
// import { isEmpty } from '../../utils';
// import HTMLparse from 'html-react-parser';

// Utilized components imported
// import SomeComp from './';

const TeamGroup = ({ group }) => {
	console.log('>> TEST RENDER TEAM_GROUP:', group);

	// const handleSomething = () => {
	// 	console.log('>>');
	// };
	// <SomeComp handleSomething={handleSomething} />

	if (group.teamMembers) {
		return (
			<div>
				<h1>{group.teamName}</h1>

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

export default TeamGroup;

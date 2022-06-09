import React from 'react';
// Addon dependencies imported
// import { isEmpty } from '../../utils';
// import HTMLparse from 'html-react-parser';

// Utilized components imported
// import SomeComp from './';

const VolunteerForm = () => {
	// FIRST NAME *
	// LAST NAME *
	// PHONE #
	// EMAIL ADDRESS *
	// CITY +
	// STATE *
	// HOW WOULD YOU HELP OR WHAT IS YOUR REL EXP?
	return (
		<form name="volunteer-contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
			<div className="fields">
				<div className="input-field">
					<input type="text" name="first_name" id="first_name" placeholder="First Name *" required />
				</div>
				<div className="input-field">
					<input type="text" name="last_name" id="last_name" placeholder="Last Name *" required />
				</div>
				<div className="input-field">
					<input type="phone" name="phone_number" id="phone_number" placeholder="Phone" />
				</div>
				<div className="input-field">
					<input type="email" name="email" id="email" placeholder="Email *" required />
				</div>
				<div className="input-field">
					<input type="text" name="city" id="city" placeholder="City *" required />
				</div>
				<div className="input-field">
					<input type="text" name="state" id="state" placeholder="State *" required />
				</div>
				<div className="input-field">
					<textarea
						type="textarea"
						name="message"
						id="message"
						placeholder="How would you like to help? What is your relevant experience? *"
						required
					/>
				</div>
				<div className="input-field">
					<div data-netlify-recaptcha="true"></div>
				</div>
			</div>
			<ul className="actions">
				<li>
					<input type="submit" value="Send Message" />
				</li>
			</ul>
		</form>
	);
};

export default VolunteerForm;

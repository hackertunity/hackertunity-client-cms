import React from 'react';
// Addon dependencies imported
// import { isEmpty } from '../../utils';
// import HTMLparse from 'html-react-parser';

// Utilized components imported
// import SomeComp from './';

const DonateButton = () => {
	console.log('>> TEST RENDER DONATE_BUTTON:');

	return (
		<>
			<h3 style={{ display: 'inline', padding: '10px' }}>Donate on Paypal:</h3>
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
};

export default DonateButton;

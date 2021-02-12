import React from 'react';
import { Link } from 'gatsby';

const SubMenu = ({ menu }) => {
	console.log('>> TEST_USING_MENU:', menu);

	return (
		<li className="navbar-item">
			<Link className="navbar-item-link" to="">
				SUB_MENU_WORKS
			</Link>
		</li>
	);
};

export default SubMenu;

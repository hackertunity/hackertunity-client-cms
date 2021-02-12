import React from 'react';
import { Link } from 'gatsby';

const SubMenu = ({ menu }) => {
	console.log('>> TEST_USING_MENU:', menu);

	let render;

	if (menu.subMenu.length > 0) {
		if (menu.topLink) {
			// SUB-MENU /w TOP LINK
			// TODO: <<<
		} else {
			// SUB-MENU /W TOP STATIC
			render = (
				<li className="navbar-item">
					<Link className="navbar-item-link" to={menu.path}>
						STATIC_SUB_MENU_TBD
					</Link>
				</li>
			);
		}
	} else {
		// SINGLE LINK
		render = (
			<li className="navbar-item">
				<Link className="navbar-item-link" to={menu.path}>
					{menu.name}
				</Link>
			</li>
		);
	}

	return render;
};

export default SubMenu;

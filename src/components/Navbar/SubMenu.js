import React from 'react';
import { Link } from 'gatsby';

const SubMenu = ({ menu }) => {
	console.log('>> TEST_USING_MENU:', menu);

	let render;

	if (menu.subMenu && menu.subMenu.length > 0) {
		if (menu.topLink) {
			// SUB-MENU /w TOP LINK
			// TODO: <<<
		} else {
			// SUB-MENU /W TOP STATIC
			render = (
				<li className="navbar-item">
					<div
						className="navbar-item-link menu-static-header"
						aria-haspopup={true}
					>
						{menu.name}
					</div>
					<ul className="navbar-submenu" aria-label="submenu">
						{menu.subMenu.map((subLink, i) => (
							<li className="nav-bar-item sub-item" key={i}>
								<Link
									className="navbar-item-link sub-item-link"
									to={subLink.path}
								>
									{subLink.name}
								</Link>
							</li>
						))}
					</ul>
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

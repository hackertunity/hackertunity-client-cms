import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import logo from '../img/brand/hackertunity_logo.png';

import { graphql, useStaticQuery } from 'gatsby';

const MenuLinksQuery = graphql`
	query MenuLinksQuery {
		site {
			siteMetadata {
				menuLinks {
					name
					path
					subMenu {
						name
						path
					}
				}
			}
		}
	}
`;

const NavBar = () => {
	// NAV LINK DATA
	const {
		site: {
			siteMetadata: { menuLinks },
		},
	} = useStaticQuery(MenuLinksQuery);

	// console.log('>> TEST_MENU_LINKS_QUERY_DATA:', menuLinks);

	// COMPONENT STATE
	const [active, setActive] = useState(false);
	const [navBarActiveClass, setNavBarActiveClass] = useState('');

	const toggleHamburger = () => {
		setActive(!active);
	};

	useEffect(() => {
		active ? setNavBarActiveClass('is-active') : setNavBarActiveClass('');
	});

	// COMPONENT RENDER
	return (
		<nav
			className="navbar is-transparent"
			role="navigation"
			aria-label="main-navigation"
		>
			<div className="container">
				<div className="navbar-brand">
					<Link to="/" className="navbar-item" title="Logo">
						<img src={logo} alt="Hackertunity inc." />
						Hackertunity, Inc.
					</Link>
					{/* Hamburger menu */}
					<div
						className={`navbar-burger burger ${navBarActiveClass}`}
						data-target="navMenu"
						onClick={() => toggleHamburger()}
					>
						<span />
						<span />
						<span />
					</div>
				</div>
				<div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
					<div className="navbar-start has-text-centered">
						<ul>
							{menuLinks.map((link) => (
								<li className="navbar-item" key={link.name}>
									<Link
										className="navbar-item-link"
										to={link.path}
										aria-haspopup={
											link.subMenu && link.subMenu.length > 0
												? true
												: false
										}
									>
										{link.name}
									</Link>
									{link.subMenu && link.subMenu.length > 0 ? (
										<ul
											className="navbar-submenu"
											aria-label="submenu"
										>
											{link.subMenu.map((subLink) => (
												<li
													className="navbar-item sub-item"
													key={subLink.name}
												>
													<Link
														className="navbar-item-link sub-item-link"
														to={subLink.path}
													>
														{subLink.name}
													</Link>
												</li>
											))}
										</ul>
									) : null}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;

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
						onClick={() => this.toggleHamburger()}
					>
						<span />
						<span />
						<span />
					</div>
				</div>
				<div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
					<ul>
						{menuLinks.map((link) => (
							<li key={link.name}>
								<a
									href={link.link}
									aria-haspopup={
										link.subMenu && link.subMenu.length > 0
											? true
											: false
									}
								>
									{link.name}
								</a>
								{link.subMenu && link.subMenu.length > 0 ? (
									<ul aria-label="submenu">
										{link.subMenu.map((subLink) => (
											<li key={subLink.name}>
												<a href={subLink.link}>{subLink.name}</a>
											</li>
										))}
									</ul>
								) : null}
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;

import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/brand/hackertunity_logo.png';

const Navbar = class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			navBarActiveClass: '',
		};
	}

	toggleHamburger = () => {
		// toggle the active boolean in the state
		this.setState(
			{
				active: !this.state.active,
			},
			// after state has been updated,
			() => {
				// set the class in state for the navbar accordingly
				this.state.active
					? this.setState({
							navBarActiveClass: 'is-active',
					  })
					: this.setState({
							navBarActiveClass: '',
					  });
			}
		);
	};

	render() {
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
						</Link>
						{/* Hamburger menu */}
						<div
							className={`navbar-burger burger ${this.state.navBarActiveClass}`}
							data-target="navMenu"
							onClick={() => this.toggleHamburger()}
						>
							<span />
							<span />
							<span />
						</div>
					</div>
					<div
						id="navMenu"
						className={`navbar-menu ${this.state.navBarActiveClass}`}
					>
						<div className="navbar-start has-text-centered">
							<Link className="navbar-item" to="/our-mission">
								Our Mission
							</Link>
							<Link className="navbar-item" to="/our-team">
								The Team
							</Link>
							<Link
								className="navbar-item"
								to="/acknowledgements"
							>
								Acknowledgements
							</Link>
							<Link
								className="navbar-item"
								to="/training-resources"
							>
								Training Resources
							</Link>
							<Link className="navbar-item" to="/blog">
								Job Feed
							</Link>
							<Link
								className="navbar-item"
								to="/working-remotely"
							>
								Working Remotely
							</Link>
							<Link
								className="navbar-item"
								to="/small-businesses"
							>
								Small Businesses
							</Link>
						</div>
						<div className="navbar-end has-text-centered">
							<a
								className="navbar-item secondary-nav"
								href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="icon place-holder"></span>
							</a>
						</div>
					</div>
				</div>
			</nav>
		);
	}
};

export default Navbar;

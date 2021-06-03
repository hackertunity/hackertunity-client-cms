import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/brand/hackertunity_logo.png';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const Footer = class extends React.Component {
	render() {
		const { isHomePage } = this.props;

		const Footerlogo = () => {
			if (!isHomePage) {
				return (
					<div className="content has-text-centered">
						<img src={logo} alt="Hackertunity" style={{ width: "14em", height: "14em" }} />
					</div>
				);
			} else {
				return <></>;
			}
		};
		return (
			<footer className="footer has-background-black has-text-white-ter">
				{Footerlogo()}
				<div className="content has-text-centered has-background-black has-text-white-ter">
					<div className="container has-background-black has-text-white-ter">
						<div style={{ maxWidth: '100vw' }} className="columns">
							<div className="column is-4">
								<section className="menu">
									<ul className="menu-list">
										<li>
											<Link
												to="/our-mission"
												className="navbar-item"
											>
												Our Mission
											</Link>
										</li>
										<li>
											<Link className="navbar-item" to="/our-team">
												The Team
											</Link>
										</li>
										<li>
											<Link
												className="navbar-item"
												to="/acknowledgements"
											>
												Acknowledgements
											</Link>
										</li>
									</ul>
								</section>
							</div>
							<div className="column is-4">
								<section>
									<ul className="menu-list">
										<li>
											<Link
												className="navbar-item"
												to="/training-resources"
											>
												Training Resources
											</Link>
										</li>
										<li>
											<Link className="navbar-item" to="/blog">
												Job Feed
											</Link>
										</li>
										<li>
											<Link
												className="navbar-item"
												to="/working-remotely"
											>
												Working Remotely
											</Link>
										</li>
									</ul>
								</section>
							</div>
							<div
								className="column is-4 social"
								style={{ display: 'none' }}
							>
								<a
									title="facebook"
									href="https://facebook.com"
									target="_blank"
								>
									<img
										src={facebook}
										alt="Facebook"
										style={{ width: '1em', height: '1em' }}
									/>
								</a>
								<a
									title="twitter"
									href="https://twitter.com"
									target="_blank"
								>
									<img
										className="fas fa-lg"
										src={twitter}
										alt="Twitter"
										style={{ width: '1em', height: '1em' }}
									/>
								</a>
								<a
									title="instagram"
									href="https://instagram.com"
									target="_blank"
								>
									<img
										src={instagram}
										alt="Instagram"
										style={{ width: '1em', height: '1em' }}
									/>
								</a>
								<a
									title="vimeo"
									href="https://vimeo.com"
									target="_blank"
								>
									<img
										src={vimeo}
										alt="Vimeo"
										style={{ width: '1em', height: '1em' }}
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
};

export default Footer;

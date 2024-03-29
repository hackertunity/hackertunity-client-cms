import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './styles/all.sass';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';

const TemplateWrapper = ({ children, isHomePage }) => {
	const { title, description } = useSiteMetadata();
	return (
		<div className="light-theme">
			<Helmet>
				<html lang="en" />
				<title>{title}</title>
				<meta name="description" content={description} />

				<link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix('/')}img/favicon-32x32.png`} />
				<link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-32x32.png`} sizes="32x32" />
				<link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-16x16.png`} sizes="16x16" />

				<link rel="mask-icon" href={`${withPrefix('/')}img/favicon-32x32.png`} color="#ff4400" />
				<meta name="theme-color" content="#fff" />

				<meta property="og:type" content="nonprofit" />
				<meta property="og:title" content="End poverty. Empower the people. Enrich tech." />
				<meta property="og:url" content="/" />
				<meta property="og:image" content={`${withPrefix('/')}img/og-image.png`} />
			</Helmet>
			<Navbar />
			<main className="main-content">{children}</main>
			<Footer isHomePage={isHomePage} />
		</div>
	);
};

export default TemplateWrapper;

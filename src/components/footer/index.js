import React from "react";
import styles from "./index.module.scss";

import { NavLink } from "react-router-dom";
import offices from "../../common/offices";
import socials from "../../common/socials";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapperTop}>
				<div className={styles.top}>
					<div className={styles.brand}>
						<div className={styles.logo}>
							<img src="/assets/images/logo.svg" alt='Salewhale logo' />
						</div>
						<div className={styles.name}>
							<img src="/assets/images/wordmark.svg" alt='Saleswhale wordmark' />
						</div>
					</div>
					<div className={styles.quickLinksQroup}>
						<div className={styles.quickLinks}>
							<h3>Why Wholesale</h3>
							<ul>
								<li>
									<NavLink to="#">
										Collaborative Intelligence
									</NavLink>
								</li>
								<li>
									<NavLink to="#">
										AI Assistant Capabilities
									</NavLink>
								</li>
								<li>
									<NavLink to="#">Customer Stories</NavLink>
								</li>
								<li>
									<NavLink to="#">
										Use Case - Technology
									</NavLink>
								</li>
								<li>
									<NavLink to="#">
										Use Case - Technology
									</NavLink>
								</li>
								<li>
									<NavLink to="#">Use Case - Events</NavLink>
								</li>
							</ul>
						</div>
						<div className={styles.quickLinks}>
							<h3>Product</h3>
							<ul>
								<li>
									<NavLink to="#">AI Conversations</NavLink>
								</li>
								<li>
									<NavLink to="#">Lead Enrichment</NavLink>
								</li>
								<li>
									<NavLink to="#">Deal Intelligence</NavLink>
								</li>
								<li>
									<NavLink to="#">
										Workflow Integration
									</NavLink>
								</li>
							</ul>
						</div>
						<div className={styles.quickLinks}>
							<h3>Company</h3>
							<ul>
								<li>
									<NavLink to="#">About us</NavLink>
								</li>
								<li>
									<NavLink to="#">Blog</NavLink>
								</li>
								<li>
									<NavLink to="#">Resources</NavLink>
								</li>
								<li>
									<NavLink to="#">Careers</NavLink>
								</li>
								<li>
									<NavLink to="#">Help Centre</NavLink>
								</li>
							</ul>
						</div>
						<div className={styles.quickLinks}>
							<h3>Contact</h3>
							<ul>
								<li>
									<a href="mailto:hello@saleswhale.com">
										hello@sailswhale.com
									</a>
								</li>
							</ul>
							{offices.map(({ country, address }) => (
								<React.Fragment key={`country-${country}`}>
									<h3>{country} Office</h3>
									<span
										dangerouslySetInnerHTML={{
											__html: address.replace(
												/\n/g,
												"<br/>"
											),
										}}
									></span>
								</React.Fragment>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className={styles.wrapperBottom}>
				<div className={styles.bottom}>
					<div className={styles.copyright}>
						<NavLink to="#">Privacy</NavLink>
						<NavLink to="#">Terms</NavLink>
						<span>
							&copy; 2020 Saleswhale, Inc. All rights reserved.
						</span>
					</div>
					<div className={styles.social}>
						{socials.map(({ name, logo, link }) => (
							<NavLink key={`social-${name}`} to={link} className={styles.icon}>
								<img src={logo} alt={`${name} logo`} />
							</NavLink>
						))}
					</div>
				</div>
				<div className={styles.vectors}>
					<div className={styles.circle}></div>
					<div className={styles.wavy}>
						<img
							src="/assets/images/footer-vector-darkblue.svg"
							alt=""
						/>
						<img
							src="/assets/images/footer-vector-lightblue.svg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

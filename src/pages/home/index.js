import React from "react";
import styles from "./index.module.scss";

import Header from "../../components/header";
import Footer from "../../components/footer";
import cultures from "../../common/cultures";
import progress from "../../common/progress";
import offices from "../../common/offices";
import investors from "../../common/investors";
import { NavLink } from "react-router-dom";

const Home = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.heroImg}>
					<img src="/assets/images/hero-img.svg" />
				</div>
				<section className={styles.intro}>
					<h1>A future where AI and humans work hand in hand</h1>
					<p>
						At Saleswhale, we believe that the future of work is
						Collaborative Intelligence - where machines and AI help
						humans fulfil their highest potential by automating
						drudgery and producing for more effective results.
						<br />
						<br />
						AI assistants help to automate repetitive and mundane
						tasks so that us humans focus on creative, high-impact
						work that creates value and inspires. The result?
						Happier and more productive teams doing meaningful work.
						<br />
						<br />
						Our mission is to put an AI assistant in every company
						that could greatly benefit from it, and we're starting
						off strong addressing this need in marketing and sales
						teams all across the world.
						<br />
						<br />
						The future is where AI and humans work hand in hand, and
						we’re here to help businesses benefit from that.
					</p>
				</section>
				<section className={styles.cultureSection}>
					<h2>Our Culture</h2>
					<p>
						At Saleswhale, we encourage everyone to grow and
						innovate, while having fun in the process.{" "}
					</p>
					<div className={styles.cultures}>
						{cultures.map(({ img, title, summary }, id) => (
							<div
								key={`${title}-${summary}`}
								className={styles.culture}
							>
								<div className={styles.cultureImg}>
									<img src={img} />
								</div>
								<h3>{title}</h3>
								<p>{summary}</p>
							</div>
						))}
					</div>
					<p className={styles.below}>
						If you are excited by our vision of the future, and want
						to solve meaningful problems, talk to us!
					</p>
					<NavLink className={`${styles.join} bgMain`} to="#">
						Join the team
					</NavLink>
				</section>
				<section className={styles.progressSection}>
					<h2>Our Progress</h2>
					<ul className={styles.progressBlock}>
						{progress.map(({ year, event }) => (
							<li
								key={`${year}-${event}`}
								className={styles.story}
							>
								<div className={styles.date}>{year}</div>
								<div className={styles.icon}>
									<img
										src="/assets/images/letters.svg"
										alt=""
									/>
								</div>
								<div className={styles.event}>
									<p>{event}</p>
								</div>
							</li>
						))}
					</ul>
				</section>
				<div className={styles.pinkBg}>
					<div className={styles.leftCircle}></div>
					<div className={styles.rightCircle}></div>
				</div>
				<section className={styles.officesSection}>
					<h2>Our Offices</h2>
					<div className={styles.offices}>
						{offices.map(({ image, country, address }) => (
							<div
								key={`${country}-${address}`}
								className={styles.office}
							>
								<div className={styles.countryImg}>
									<img src={image} alt={country} />
								</div>
								<span className={styles.countryName}>
									{country}
								</span>
								<span
									className={styles.address}
									dangerouslySetInnerHTML={{
										__html: address.replace(/\n/g, "<br/>"),
									}}
								></span>
							</div>
						))}
					</div>
				</section>
				<section className={styles.investorsSection}>
					<h2>Our Investors</h2>
					<div className={styles.investors}>
						{investors.map(({ logo, name }) => (
							<div className={styles.investor}>
								<img src={logo} alt={`${name} logo`} />
							</div>
						))}
					</div>
				</section>
				<section className={styles.trialSection}>
					<h2>See the future</h2>
					<div>
						<NavLink className={styles.demo} to="#">
							Get a Demo
						</NavLink>
						<NavLink className={styles.usecases} to="#">
							Read use cases
						</NavLink>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Home;

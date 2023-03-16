
import { FC } from "react"

import MyStartButton from "../../../../../components/ui/MyButton/MyStartButton"
import Container from "../../../../../components/ui/container/Container"
import H3 from "../../../../../components/ui/heading/H3"

import styles from "./TopSection.module.scss"
import topBgImg from "./top-bg.svg"
import manImg from "./top.png"
import MyApkButton from "../../../../ui/MyButton/MyApkButton"

const TopSection: FC = () => {
	return (
		<section
			style={{ backgroundImage: `url(${topBgImg})` }}
			className={styles.root}
		>
			<Container className={styles.wrap}>
				<div className={styles.left}>
					<H3>ADVANCE YOUR CAREER</H3>
					<h1>100%&nbsp;Online Ingliz&nbsp;tilini o'rganish platformasi</h1>
					<p>O'qituvchisiz ham Ingliz tilini tez va samarali o'rganing</p>
					<MyStartButton />
					<MyApkButton />
				</div>
				<div className={styles.right}>
					<img src={manImg} alt="" loading="eager" />
				</div>
			</Container>
		</section>
	)
}

export default TopSection

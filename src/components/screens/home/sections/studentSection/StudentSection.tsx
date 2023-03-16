import { FC } from "react"

import Container from "../../../../../components/ui/container/Container"
import H2 from "../../../../../components/ui/heading/H2"
import H3 from "../../../../../components/ui/heading/H3"

import styles from "./StudentSection.module.scss"
import StundetSlider from "./slider/StudentSlider"

const StudentSection: FC = () => {
	return (
		<section className={styles.root}>
			<Container className={styles.wrap}>
				<div className={styles.video}>
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/Jkj36B1YuDU"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
				<div className={styles.right}>
					<H3>SUCCES STORIES</H3>
					<H2>Our Students</H2>
					<StundetSlider />
				</div>
			</Container>
		</section>
	)
}

export default StudentSection

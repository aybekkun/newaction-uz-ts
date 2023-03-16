import { FC } from "react"

import Container from "../../../../../components/ui/container/Container"
import H2 from "../../../../../components/ui/heading/H2"
import H3 from "../../../../../components/ui/heading/H3"
import P from "../../../../../components/ui/heading/P"
import LI from "../../../../../components/ui/list/LI"

import styles from "./PrepareSection.module.scss"
import manOneImg from "./man-3.webp"
import manTwoImg from "./man-4.webp"

const PrepareSection: FC = () => {
	return (
		<section className={styles.root}>
			<Container className={styles.wrap}>
				<div className={styles.right}>
					<H3>CHOOSE YOUR PATH</H3>
					<H2>
						Bu Platforma orqali siz noldan boshlab ingliz tili Intermadiate (B1)
						darajagacha o'rgana olasiz!
					</H2>
					<P>Kurs o'zbek va qoraqolpoq tillarida ishlab chiqilgan.</P>
					<ul>
						<LI>BEGINNER Unitlar soni 14 Yangi so'zlar ( wordlist) 1000 Daraja A1</LI>
						<LI>
							ELEMENTARY Unitlar soni 12 Yangi so'zlar (wordlist) 1000 Daraja A1 +
						</LI>
						<LI>
							Pre-Intermadiate Unitlar soni 12 Yangi so'zlar (wordlist) 1100 Daraja A2
						</LI>
						<LI>
							Intermadiate Unitlar soni 12 Yangi so'zlar (wordlist) 1000 Daraja B1
						</LI>
					</ul>
				</div>

				<div className={styles.left}>
					<img src={manOneImg} className={styles.imgOne} alt="book" loading="lazy" />
					<img src={manTwoImg} className={styles.imgTwo} alt="girl" loading="lazy" />
				</div>
			</Container>
		</section>
	)
}

export default PrepareSection

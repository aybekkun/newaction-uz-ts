import { FC } from "react"

import MyStartButton from "../../../../../components/ui/MyButton/MyStartButton"
import Container from "../../../../../components/ui/container/Container"
import H2 from "../../../../../components/ui/heading/H2"
import H3 from "../../../../../components/ui/heading/H3"
import P from "../../../../../components/ui/heading/P"

import styles from "./CertificateSection.module.scss"
import manOneImg from "./man-1.webp"
import manTwoImg from "./man-2.webp"

const CertificateSection: FC = () => {
	return (
		<section className={styles.root}>
			<Container className={styles.wrap}>
				<div className={styles.left}>
					<img src={manOneImg} className={styles.imgOne} alt="book" loading="lazy" />
					<img src={manTwoImg} className={styles.imgTwo} alt="girl" loading="lazy" />
				</div>
				<div className={styles.right}>
					<H3 mb={1}>UPGRADE YOUR SKILLS</H3>
					<H2 mb={2}>Kitobdan qanday foydalaniladi?</H2>
					<P mb={2}>
						Birinchi navbatda unitga kerak bo'ladigan yangi so'zlar ( wordlist) ni
						yodlashingiz kerak.
					</P>
					<P mb={3}>
						Ikkinchi navbatda esa shu unitni gramatikasini yaxshilab o'rganishingiz
						kerak. Keyin esa bu ikkisidan foydalanib siz ingliz tilida matnlar tarjima
						qilasiz, audiolar eshitasiz, shu so'zlar ishtirokida og'zaki va yozma
						gaplar tuzasiz. Har xil mavzularda kichik va katta insholar yozishni
						o'rganasiz!
					</P>
					<MyStartButton />
				</div>
			</Container>
		</section>
	)
}

export default CertificateSection

import { FC } from "react"

import Container from "../../../../../components/ui/container/Container"
import H2 from "../../../../../components/ui/heading/H2"
import H3 from "../../../../../components/ui/heading/H3"
import P from "../../../../../components/ui/heading/P"
import LI from "../../../../../components/ui/list/LI"

import styles from "./AppSection.module.scss"
import phoneImg from "./phone.webp"

const AppSection: FC = () => {
	return (
		<section className={styles.root}>
			<Container className={styles.wrap}>
				<div className={styles.left}>
					<img src={phoneImg} alt="app img" loading="lazy" />
				</div>
				<div className={styles.right}>
					<H3 mb={1}>choose your path</H3>
					<H2 mb={2}>Download Our App</H2>
					<P mb={3}>
						Newaction.uz - siz o'zingiz yoki o'qituvchi bilan ingliz tilini
						o'rganishingiz, ona tilida so'zlashuvchi bilan suhbat nutqingizni
						yaxshilashingiz, ingliz tilidagi so'zlarni o'rganishingiz, tinglab
						tushunishni o'rganishingiz, madaniyatni o'rganishingiz mumkin - istalgan
						joyda va qulay vaqtda.
					</P>
					<ul>
						<LI>
							O'ZINGIZ O'RGANING. Shaxsiy lug'atingizga yangi so'zlarni qo'shing va
							keyin ularni simulyator yordamida o'rganing. Ingliz tilini noldan
							o'rganayotganlar uchun biz turli mavzulardagi mashhur iboralarni tanladik
							- sayohatdan tortib ish suhbatlarigacha.
						</LI>
						<LI>
							INGLIZ TILI HAQIDA YANGI BILIM.Madaniyat, turmush tarzi, hazil va,
							albatta, ingliz lug'ati haqida juda ko'p foydali ma'lumotlar.
						</LI>
						<LI>
							TINGLASH. Ilovada siz ona tilida so'zlashuvchilarning ravon nutqini
							yaxshiroq tushunish uchun ingliz tilida qisqa videolarni tomosha
							qilishingiz mumkin. Dastur kino, san'at, fan, moda, so'z tanlash va
							boshqa mavzularni o'z ichiga oladi.
						</LI>
					</ul>
				</div>
			</Container>
		</section>
	)
}

export default AppSection

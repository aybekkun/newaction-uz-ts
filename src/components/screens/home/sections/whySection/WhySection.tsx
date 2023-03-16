import { FC } from 'react'


import styles from './WhySection.module.scss'
import whyBgImg from './why-bg.svg'
import WhyItem from './whyItem/WhyItem'
import P from '../../../../ui/heading/P'
import Container from '../../../../ui/container/Container'
import H3 from '../../../../ui/heading/H3'
import H2 from '../../../../ui/heading/H2'

const WhySection: FC = () => {
	return (
		<section
			className={styles.root}
			style={{ backgroundImage: `url(${whyBgImg})` }}
		>
			<Container className={styles.wrap}>
				<div className={styles.left}>
					<H3 mb={2}>A BETTER CHOICE</H3>
					<H2 mb={1}>Nima uchun ingliz tilini biz bilan o'rganishingiz kerak?</H2>
					<P>
						Bu platforma orqali siz ingliz tilini xoxlagan joyingizda va xoxlagan
						vaqtingizda o'rganishingiz mumkin. O'rganish davomida siz birinchi so'zlar
						yodlaysiz keyin gramatika o'rganasiz va shu ikkisi ishtirokida ingluz
						tilidagi 4 mahoratingizni (o'qib tushunish, eshitib tushunish, yozish va
						gapirish) oshirib borasiz
					</P>
				</div>
				<div className={styles.right}>
					<WhyItem
						title="Vaqt"
						icon="AccessTime"
						description="O'zingizga qulay vaqtda o'rganing."
					/>
					<WhyItem
						title="Joy"
						icon="Place"
						description="O'zingizga qulay joyda o'rganing."
					/>
					<WhyItem
						title="Yo'l"
						icon="TurnSlightRight"
						description="O'quv markazlariga borishga ketadigan vaqtingiz va pulingiz yoningizga qoladi"
					/>
				</div>
			</Container>
		</section>
	)
}

export default WhySection

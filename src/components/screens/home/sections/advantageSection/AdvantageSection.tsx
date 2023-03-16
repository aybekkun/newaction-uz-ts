import { FC } from "react"

import Container from "../../../../../components/ui/container/Container"

import styles from "./AdvantageSection.module.scss"
import Item from "./Item"

const AdvantageSection: FC = () => {
	return (
		<section className={styles.root}>
			<Container className={styles.wrap}>
				<Item
					title="Qancha vaqt shug'ullanish kerak?"
					description="Har bir unit uchun o'rtacha 3- 4 soat shug'ullansangiz natijasi yaxshi bo'ladi"
				/>
				<Item
					title="Kurs tamomlangandan keyingi daraja?"
					description="Har bir darajani tugatganingizdan keyin 1000 atrofidagi so'zlarni ingliz tilida o'qish, yozish, eshitish va gapirishda ishlata olasiz."
				/>
				<Item
					title="Platformadan qansay foydalanishga tushunmay qolsangiz"
					description="Bunday holatda sizga online mentor biriktirilgan bo'ladi va undan to'liq foydalanishingiz mumkin."
				/>
			</Container>
		</section>
	)
}

export default AdvantageSection

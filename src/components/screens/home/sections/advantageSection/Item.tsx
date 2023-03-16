import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined"
import { FC } from "react"

import styles from "./AdvantageSection.module.scss"

type ItemProps = {
	title: string
	description: string
}
const Item: FC<ItemProps> = ({ title, description }) => {
	return (
		<div className={styles.item}>
			<CheckCircleOutlinedIcon />
			<div className={styles.box}>
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default Item

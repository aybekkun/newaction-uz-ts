import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined"
import HttpsIcon from "@mui/icons-material/Https"
import cn from "classnames"
import { FC } from "react"
import { Link, useParams } from "react-router-dom"
import { COURSE_PAGE } from "../../../shared/constants/route"
import { onScrollTop } from "../../../utils/onScrollTop"


import styles from "./Accordion.module.scss"

type AccordionItemProps = {
	title: string
	available: boolean
	id: number
}

const AccordionItem: FC<AccordionItemProps> = ({
	id,
	title,
	available = false,
}) => {
	const { courseId, materialId } = useParams()

	const icon = available ? (
		<ArticleOutlinedIcon className={styles.icon} />
	) : (
		<HttpsIcon className={styles.icon} />
	)

	if (!available) {
		return (
			<div
				className={cn(styles.item, {
					[styles.active]: Number(materialId) === id,
				})}
			>
				{icon}
				<span>{title}</span>
			</div>
		)
	}

	return (
		<Link
			onClick={onScrollTop}
			to={`${COURSE_PAGE}/${courseId}/${id}`}
			className={cn(styles.item, {
				[styles.active]: Number(materialId) === id,
			})}
		>
			{icon}
			<span>{title}</span>
		</Link>
	)
}

export default AccordionItem

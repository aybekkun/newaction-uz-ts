import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted"
import PersonIcon from "@mui/icons-material/Person"
import StarIcon from "@mui/icons-material/Star"
import { FC } from "react"
import { Link } from "react-router-dom"

import styles from "./Card.module.scss"
import { ICard } from "./card.interface"
import { COURSE_PAGE } from "../../../shared/constants/route"
import { _BASE_URL } from "../../../configs/api.config"
import { onScrollTop } from "../../../utils/onScrollTop"


const Card: FC<ICard> = ({
	title,
	description,
	id,
	sub_lesson_2s_id,
	image,
	learners_count,
	lessons,
	price,
	rating_mark_overall,
}) => {
	return (
		<Link onClick={onScrollTop} to={`${COURSE_PAGE}/${id}/${sub_lesson_2s_id}`} className={styles.root}>
			<img
				src={`${_BASE_URL}/public/images/${image}`}
				className={styles.topImg}
			
				alt="card"
				loading="lazy"
			/>
			<div className={styles.desc}>
				<h4>{title}</h4>
				<p>{description}</p>
				<div className={styles.lessons}>
					<FormatListBulletedIcon fontSize={"small"} />
					<span>{lessons} lessons</span>
				</div>
				<div className={styles.info}>
					<div className={styles.price}>{price.toLocaleString()} uzs</div>
					<div className={styles.counts}>
						<div className={styles.rate}>
							<StarIcon />
							<span> {rating_mark_overall}</span>
						</div>
						<div className={styles.person}>
							<PersonIcon /> <span>{learners_count}</span>
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default Card

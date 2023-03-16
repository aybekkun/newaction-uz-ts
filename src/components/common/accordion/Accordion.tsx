import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import { IconButton } from "@mui/material"
import cn from "classnames"
import { FC } from "react"

import useToggle from "../../../hooks/useToggle"
import { ILesson } from "../../../shared/types/course.types"

import styles from "./Accordion.module.scss"
import { useIsToggled } from "./useIsToggled"

type AccordionProps = {
	id: number
	children?: React.ReactNode
	title: string
	lessons?: ILesson[]
}

const Accordion: FC<AccordionProps> = ({
	id,
	lessons = [],
	title,
	children,
}) => {
	const [value, toggle, setValue] = useToggle()
	useIsToggled(lessons, id, setValue)
	return (
		<div
			className={cn(styles.root, {
				[styles.active]: value,
			})}
		>
			<div className={styles.title} onClick={toggle}>
				<span>{title}</span>
				<IconButton className={styles.button}>
					<KeyboardArrowRightIcon />
				</IconButton>
			</div>
			<div className={styles.content}>{children}</div>
		</div>
	)
}

export default Accordion

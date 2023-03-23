// @ts-nocheck
import { FC } from "react"
import styles from "../Editer.module.scss"
import parse from "html-react-parser"
import cn from "classnames"
import useToggle from "../../../hooks/useToggle"
import { Button } from "@mui/material"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
const Hide: FC = ({ block }) => {
	const [value, toggle] = useToggle()
	return (
		<div className={styles.hide}>
			<Button sx={{mb:1}} onClick={toggle} startIcon={!value ? <VisibilityOffIcon /> : <VisibilityIcon />}>
				Show
			</Button>
			<p
				className={cn(styles.show, {
					[styles.active]: value,
				})}
			>
				{block.data.text ? parse(block.data.text) : ""}
			</p>
		</div>
	)
}

export default Hide

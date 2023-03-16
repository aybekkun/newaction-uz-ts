import cn from "classnames"
import parse from "html-react-parser"
import { FC, InputHTMLAttributes, forwardRef } from "react"

import styles from "./Radiobox.module.scss"

type RadioboxProps = {
	text: string
	name: string
	checked?: boolean
	wrong?: boolean
	right?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const Radiobox = forwardRef<HTMLInputElement, RadioboxProps>(
	(
		{ name, text, checked = false, wrong = false, right = false, ...rest },
		ref
	) => {
		return (
			<label className={styles.root}>
				<input ref={ref} type="radio" checked={checked} name={name} {...rest} />
				<span
					className={cn(styles.checkmark, {
						[styles.true]: right,
						[styles.wrong]: wrong,
					})}
				></span>
				<span
					className={cn(styles.checkmark__text, {
						[styles.true]: right,
						[styles.wrong]: wrong,
					})}
				>
					{parse(text)}
				</span>
			</label>
		)
	}
)

export default Radiobox

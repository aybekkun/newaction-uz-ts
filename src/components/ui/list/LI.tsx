import cn from "classnames"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

import styles from "./LI.module.scss"

export interface IListElement
	extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	mb?: 1 | 2 | 3
}

const LI: FC<IListElement> = ({ mb, children, className, ...props }) => {
	return (
		<li
			className={cn(styles.li, className, {
				[styles.mb1]: mb === 1,
				[styles.mb2]: mb === 2,
				[styles.mb3]: mb === 3,
			})}
			{...props}
		>
			{children}
		</li>
	)
}

export default LI

import cn from "classnames"
import { FC } from "react"

import styles from "./Heading.module.scss"
import { IHeading } from "./heading.interface"

const H4: FC<IHeading> = ({ mb, children, className, ...props }) => {
	return (
		<h4
			className={cn(styles.h4, className, {
				[styles.mb1]: mb === 1,
				[styles.mb2]: mb === 2,
				[styles.mb3]: mb === 3,
			})}
			{...props}
		>
			{children}
		</h4>
	)
}

export default H4

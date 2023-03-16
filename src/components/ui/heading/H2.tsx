import cn from 'classnames'
import { FC } from 'react'

import styles from './Heading.module.scss'
import { IHeading } from './heading.interface'

const H2: FC<IHeading> = ({ mb, children, className, ...props }) => {
	return (
		<h2
			className={cn(styles.h2, className, {
				[styles.mb1]: mb === 1,
				[styles.mb2]: mb === 2,
				[styles.mb3]: mb === 3,
			})}
			{...props}
		>
			{children}
		</h2>
	)
}

export default H2

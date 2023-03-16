import cn from 'classnames'
import { FC } from 'react'

import styles from './Heading.module.scss'
import { IHeading } from './heading.interface'

const H3: FC<IHeading> = ({ mb, children, className, ...props }) => {
	return (
		<h3
			className={cn(styles.h3, className, {
				[styles.mb1]: mb === 1,
				[styles.mb2]: mb === 2,
				[styles.mb3]: mb === 3,
			})}
			{...props}
		>
			{children}
		</h3>
	)
}

export default H3

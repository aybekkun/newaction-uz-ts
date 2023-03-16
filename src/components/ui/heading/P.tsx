import cn from 'classnames'
import { FC } from 'react'

import styles from './Heading.module.scss'
import { IText } from './heading.interface'

const P: FC<IText> = ({ mb, children, className, ...props }) => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.mb1]: mb === 1,
				[styles.mb2]: mb === 2,
				[styles.mb3]: mb === 3,
			})}
			{...props}
		>
			{children}
		</p>
	)
}

export default P

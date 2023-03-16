import cn from 'classnames'
import { FC } from 'react'

import styles from './Container.module.scss'

interface IContainer {
	children?: React.ReactNode | React.ReactNode[]
	className?: string
}
const Container: FC<IContainer> = ({ children, className = '' }) => {
	return <div className={cn(styles.container, className)}>{children}</div>
}

export default Container

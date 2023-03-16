import cn from 'classnames'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import logoImg from './logo.webp'

import styles from './Logo.module.scss'

interface ILogo {
	className?: string
}
const Logo: FC<ILogo> = ({ className = ' ' }) => {
	return (
		<Link to={'/'} className={cn(styles.logo, className)}>
			<img className={styles.image} src={logoImg} alt="Logotip" />
		</Link>
	)
}

export default Logo

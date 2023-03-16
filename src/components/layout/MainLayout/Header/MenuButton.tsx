import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { IconButton } from '@mui/material'
import cn from 'classnames'
import { FC, useEffect } from 'react'

import styles from './Header.module.scss'

type MenuButtonProps = {
	open: boolean
	toggle: () => void
}

const MenuButton: FC<MenuButtonProps> = ({ open, toggle }) => {
	useEffect(() => {
		if (open) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = 'scroll'
		}
		return () => {
			document.body.style.overflowY = 'scroll'
		}
	}, [open])

	return (
		<div className={styles.menu}>
			<div
				onClick={toggle}
				className={cn(styles.overlay, {
					[styles.active]: open,
				})}
			></div>
			<div className={styles.icon}>
				<IconButton onClick={toggle}>
					{open ? <CloseIcon /> : <MenuIcon />}
				</IconButton>
			</div>
		</div>
	)
}

export default MenuButton

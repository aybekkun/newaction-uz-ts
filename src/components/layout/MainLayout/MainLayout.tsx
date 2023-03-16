import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Footer from './Footer/Footer'
import Header from './Header/Header'
import styles from './MainLayout.module.scss'

const MainLayout: FC = () => {
	return (
		<div className={styles.root}>
			<Header />
			<main className={styles.main}>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default MainLayout

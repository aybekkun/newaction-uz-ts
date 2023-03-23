import { FC } from 'react'
import Container from '../../../ui/container/Container'
import Logo from '../../../ui/Logo/Logo'
import CourseLinks from './CourseLinks'

import styles from './Footer.module.scss'
import SocialLinks from './SocialLinks'
import UsefulLinks from './UsefulLinks'

const Footer: FC = () => {

	return (
		<footer className={styles.root}>
			<Container className={styles.wrap}>
				<div className={styles.left}>
					<Logo className={styles.logo} />
					<p>O'qituvchisiz ham Ingliz tilini tez va samarali o'rganing</p>
					<SocialLinks />
				</div>
				<div className={styles.right}>
					<UsefulLinks />
					<CourseLinks/>
				</div>
			</Container>
		</footer>
	)
}

export default Footer

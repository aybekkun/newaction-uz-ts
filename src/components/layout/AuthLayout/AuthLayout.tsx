import { FC } from "react"

import styles from "./AuthLayout.module.scss"
import authBg from "./reg-bg.webp"
import Sidebar from "./sidebar/Sidebar"

const AuthLayout: FC = () => {

	
	return (
		<div className={styles.root}>
			<div className={styles.left} style={{ backgroundImage: `url(${authBg})` }}>
				<div className={styles.box}>
					<h2>ONLINE O’QITISH PLATFORMASIGA XUSH KELIBSIZ</h2>
					<p>100% online o’qitishga moslashgan o’quv platformasi</p>
				</div>
			</div>
			<Sidebar />
		</div>
	)
}

export default AuthLayout

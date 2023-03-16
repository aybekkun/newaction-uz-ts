import { FC } from "react"
import Editer from "../../../editer/Editer"

import styles from "./Material.module.scss"

const Material: FC = () => {

	return (
		<div className={styles.root}>
			<Editer />
		</div>
	)
}
export default Material

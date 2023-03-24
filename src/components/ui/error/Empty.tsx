import { FC } from "react"
import Container from "../container/Container"
import styles from "./Error.module.scss"
const Empty: FC = () => {
	return (
		<Container className={styles.root}>
		    <h2>┐( ˘_˘)┌ empty</h2>
		</Container>
	)
}

export default Empty

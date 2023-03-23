import { FC } from "react"
import Container from "../container/Container"
import errorGif from "./error.gif"
import styles from "./Error.module.scss"
const Error: FC = () => {
	return (
		<Container className={styles.root}>
			<h1>Error :(</h1>
			<img src={errorGif} alt="Error" loading="lazy" />
		</Container>
	)
}

export default Error

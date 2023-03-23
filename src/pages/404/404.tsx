import { FC } from "react"
import { Link } from "react-router-dom"
import Container from "../../components/ui/container/Container"
import MyButton from "../../components/ui/MyButton/MyButton"
import errogGif from "./404.gif"
import styles from "./404.module.scss"
const Error404: FC = () => {
	return (
		<Container className={styles.root}>
			<h1>404 Page Not Found </h1>
			<img src={errogGif} alt="404" loading="lazy"/>
			<Link to={"/"}>
				<MyButton>Go Home</MyButton>
			</Link>
		</Container>
	)
}

export default Error404

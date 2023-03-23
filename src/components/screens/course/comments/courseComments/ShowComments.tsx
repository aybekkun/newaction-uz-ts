import { Avatar, Rating } from "@mui/material"
import { FC } from "react"
import parse from "html-react-parser";
import styles from "../Comments.module.scss"

type ShowCommentsProps = {
  user_name: string
  message: string
  rating: number
}
const ShowComments: FC<ShowCommentsProps> = ({ user_name, message = "", rating }) => {
  
  return (
    <div className={styles.comments}>
      <Avatar>{user_name.at(0)}</Avatar>
      <div className={styles.text}>
        <Rating name="read-only" value={rating} readOnly />
        <div>{parse(message)}</div>
      </div>
    </div>
  )
}

export default ShowComments

import { Avatar } from "@mui/material";
import parse from "html-react-parser";
import { FC } from "react";
import styles from "../Comments.module.scss";

type ShowCommentsProps = {
  user_name: string
  message: string
  
}
const ShowComments: FC<ShowCommentsProps> = ({ user_name, message = "" }) => {
  
  return (
    <div className={styles.comments}>
      <Avatar>{user_name.at(0)}</Avatar>
      <div className={styles.text}>
        <div>{parse(message)}</div>
      </div>
    </div>
  )
}

export default ShowComments

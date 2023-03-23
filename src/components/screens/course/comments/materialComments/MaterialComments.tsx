import { Rating, TextField } from "@mui/material"
import { FC } from "react"

import styles from "../Comments.module.scss"

import CreateComments from "./CreateComments"
import ShowComments from "./ShowComments"
import { useLoadMaterialComments } from "./useLoadMaterialComments"

const CourseComments: FC = (id) => {
  const { data, refetch } = useLoadMaterialComments()

  if (data?.data.length) {
    return (
      <ShowComments user_name={data.data[0].user_name} message={data.data[0].message} />
    )
  }
  return <CreateComments refetch={refetch} />
}

export default CourseComments

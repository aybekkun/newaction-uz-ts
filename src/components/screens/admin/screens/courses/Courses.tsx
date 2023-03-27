import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd"
import { Button, IconButton, Tooltip } from "@mui/material"
import { Stack } from "@mui/system"
import { FC } from "react"
import { useQuery } from "react-query"
import { toastr } from "react-redux-toastr"
import { useNavigate } from "react-router-dom"

import { CourseService } from "../../../../../services/course/course.service"
import { ADD_COURSE_PAGE, ADD_PAGE, EDIT_PAGE } from "../../../../../shared/constants/route"
import Card from "../../../../common/card/Card"
import CardSkeleton from "../../../../ui/skeletons/CardSkeleton"

import { useDelete } from "./Actions/useDelete"
import styles from "./Courses.module.scss"

const Courses: FC = () => {
  const navigate = useNavigate()
  const { onDelete } = useDelete()
  const { data, isLoading } = useQuery("Admin courses list", () => CourseService.getAll(), {
    keepPreviousData: true,
    onError: (error: any) => toastr.error(`Something went wrong: `, `${error.message}`),
  })
  const skeletons = [...Array(4)].map((item, i) => <CardSkeleton key={i} />)

  const onAdd = (id: number | string) => {
    navigate(`${ADD_PAGE}/${id}`)
  }

  const onEdit = (id: number | string) => {
    navigate(`${EDIT_PAGE}/${id}`)
  }

  const cards = data?.map((item) => (
    <div key={item.id} className={styles.card}>
      <Card {...item} />
      <Stack direction={"row"} spacing={1}>
        <Tooltip title="Удалить курс">
          <IconButton onClick={()=>onDelete(item.id)} color="error">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Редактировать страницу курса">
          <IconButton onClick={() => onEdit(item.id)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Добавить уроки">
          <IconButton onClick={() => onAdd(item.id)}>
            <PlaylistAddIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </div>
  ))

  return (
    <>
      <Button onClick={() => navigate(ADD_COURSE_PAGE)} variant="outlined" sx={{ mb: 2 }}>
        Добавить курс
      </Button>
      <div className={styles.root}>{isLoading ? skeletons : cards}</div>
    </>
  )
}

export default Courses

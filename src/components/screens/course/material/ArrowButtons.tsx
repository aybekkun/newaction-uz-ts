import { FC } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { useCourseSelector } from "../../../../hooks/useCourseSelector.hook"
import { COURSE_PAGE } from "../../../../shared/constants/route"
import { onScrollTop } from "../../../../utils/onScrollTop"
import MyButton from "../../../ui/MyButton/MyButton"

import styles from "./Material.module.scss"

type ArrowButtonsProps = {
  next_id?: number
  previos_id?: number
}
const ArrowButtons: FC<ArrowButtonsProps> = ({ next_id = -1, previos_id = -1 }) => {
  const navigate = useNavigate()
  const { courseId } = useParams()
  const { isAvailableLesson } = useCourseSelector()
  const onClickArrow = (id: number) => {
    navigate(`${COURSE_PAGE}/${courseId}/${id}`)
    onScrollTop()
  }
  return (
    <div className={styles.arrow}>
      <MyButton
        onClick={() => onClickArrow(previos_id)}
        className={styles.button}
        disabled={previos_id === -1 }
      >
        Orqaga
      </MyButton>
      <MyButton
        onClick={() => onClickArrow(next_id)}
        className={styles.button}
        disabled={next_id === -1 || !isAvailableLesson}
      >
        Keyingisi
      </MyButton>
    </div>
  )
}

export default ArrowButtons

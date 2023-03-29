import { FC } from "react"
import { Link } from "react-router-dom"
import { _BASE_URL } from "../../configs/api.config"

import styles from "./Profile.module.scss"

type CourseItemProps = {
  course_id: string | number
  course_title: string
  course_complate_done: number
  course_image: string
  last_sub_lessone_2_id: string | number
}
const CourseItem: FC<CourseItemProps> = ({ course_id, course_title, course_complate_done, course_image,last_sub_lessone_2_id }) => {
  return (
    <div className={styles.mycourse__item }>
      <img  src={`${_BASE_URL}/public/images/${course_image}`} alt="" />
      <div className={styles.box}>
        <Link to={`/course/${course_id}/${last_sub_lessone_2_id}`}>
          <h3>{course_title}</h3>
        </Link>

        <div className={styles.info}>
          <div className={styles.progress}>
            <span className={styles.width} style={{ width: `${course_complate_done}%` }}></span>
          </div>
          <div>{course_complate_done}%</div>
        </div>

        <Link to={`/course/${course_id}/${last_sub_lessone_2_id}`} className={styles.btn}>
          Continue
        </Link>
      </div>
    </div>
  )
}

export default CourseItem

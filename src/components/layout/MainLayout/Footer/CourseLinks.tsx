import { FC } from "react"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"

import { CourseService } from "../../../../services/course/course.service"
import { COURSE_PAGE } from "../../../../shared/constants/route"
import { onScrollTop } from "../../../../utils/onScrollTop"

import styles from "./Footer.module.scss"

const CourseLinks: FC = () => {
  const { data } = useQuery("Footer Course List", () => CourseService.getAll())
  if (!data) {
    return null
  }
  return (
    <ul className={styles.links}>
      <li>
        <h4>Courses</h4>
      </li>
      {data.map((course) => (
        <li key={course.id} className="footer__list-item">
          <Link onClick={onScrollTop} to={`${COURSE_PAGE}/${course.id}/${course.sub_lesson_2s_id}`}>
            {course.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default CourseLinks

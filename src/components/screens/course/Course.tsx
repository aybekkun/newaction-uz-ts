import { FC } from "react"
import { Outlet } from "react-router-dom"

import Container from "../../../components/ui/container/Container"
import H3 from "../../../components/ui/heading/H3"
import SEO from "../../../utils/seo/SEO"
import Logo from "../../ui/Logo/Logo"

import styles from "./Course.module.scss"
import Aside from "./aside/Aside"
import Comments from "./comments/Comments"
import { useCourse } from "./useCourse"

const Course: FC = () => {
  const { course, isLoading, isError } = useCourse()

  return (
    <>
      <SEO title={course?.title ?? "Course"} description={course?.description ?? "Englis tilin bepul organish"} />
      <div className={styles.root}>
        <Container>
          <H3 mb={2}>Kurs</H3>
        </Container>
        <div>
          <Container className={styles.wrap}>
            <div className={styles.course}>
              <Outlet />
              <Comments />
            </div>
            <Aside lessons={course?.lessons} isError={isError} isLoading={isLoading} />
          </Container>
        </div>
      </div>
    </>
  )
}

export default Course

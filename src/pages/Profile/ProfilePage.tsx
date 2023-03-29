import { FC } from "react"

import Container from "../../components/ui/container/Container"
import H2 from "../../components/ui/heading/H2"
import { useAuth } from "../../hooks/useAuth.hooks"

import CourseItem from "./CourseItem"
import styles from "./Profile.module.scss"

const ProfilePage: FC = () => {
  const { user } = useAuth()
  if (!user) {
    return <H2>Registratsiyadan oting</H2>
  }

  return (
    <Container className={styles.wrap}>
      {user.courses.map((item) => (
        <CourseItem key={item.course_id} {...item} />
      ))}
    </Container>
  )
}

export default ProfilePage

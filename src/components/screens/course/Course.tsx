import { FC } from "react"
import { useQuery } from "react-query"
import { Outlet, useParams } from "react-router-dom"

import Container from "../../../components/ui/container/Container"
import H3 from "../../../components/ui/heading/H3"



import styles from "./Course.module.scss"
import Aside from "./aside/Aside"
import { CourseService } from "../../../services/course/course.service"

const Course: FC = () => {
	const { courseId } = useParams()
	const {
		data: course,
		isLoading,
		isError,
	} = useQuery(
		["Course by id", courseId],
		() => CourseService.getByIdPublic(courseId),
		{
			enabled: !!courseId,
			keepPreviousData: true,
		}
	)

	return (
		<div className={styles.root}>
			<Container>
				<H3 mb={2}>Kurs</H3>
			</Container>
			<div>
				<Container className={styles.wrap}>
					<Outlet />
					<Aside lessons={course?.lessons} isError={isError} isLoading={isLoading} />
				</Container>
			</div>
		</div>
	)
}

export default Course

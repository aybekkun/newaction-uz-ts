import { FC } from "react"
import { useQuery } from "react-query"
import { toastr } from "react-redux-toastr"

import Card from "../../../../../components/common/card/Card"
import Container from "../../../../../components/ui/container/Container"
import H2 from "../../../../../components/ui/heading/H2"
import H3 from "../../../../../components/ui/heading/H3"
import CardSkeleton from "../../../../../components/ui/skeletons/CardSkeleton"
import { CourseService } from "../../../../../services/course/course.service"


import styles from "./PopularSection.module.scss"

const PopularSection: FC = () => {
	const { data, isLoading } = useQuery(
		"Courses list",
		() => CourseService.getAll({ limit: 4 }),
		{
			keepPreviousData: true,
			onError: (error: any) =>
				toastr.error(`Something went wrong: `, `${error.message}`),
		}
	)
	const skeletons = [...Array(4)].map((item, i) => <CardSkeleton key={i} />)
	const cards = data?.map((item) => <Card key={item.id} {...item} />)

	return (
		<section className={styles.root}>
			<Container>
				<H3 className={styles.title}>ADVANCE YOUR CAREER</H3>
				<H2 className={styles.title}>Popular topics to learn now</H2>
			</Container>
			<Container className={styles.wrap}>
				{isLoading ? skeletons : cards}
			</Container>
		</section>
	)
}

export default PopularSection

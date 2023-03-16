import { FC } from "react"

import Accordion from "../../../../components/common/accordion/Accordion"
import AccordionItem from "../../../../components/common/accordion/AccordionItem"
import H4 from "../../../../components/ui/heading/H4"
import AsideSkeleton from "../../../../components/ui/skeletons/AsideSkeleton"
import { useAuth } from "../../../../hooks/useAuth.hooks"
import { ILesson } from "../../../../shared/types/course.types"


import styles from "../Course.module.scss"

type AsideProps = {
	isError: boolean
	isLoading: boolean
	lessons: ILesson[] | undefined
}

const Aside: FC<AsideProps> = ({ isError, isLoading, lessons }) => {
	const { isAdmin } = useAuth()

	const list = !isError ? (
		lessons?.map((lesson) => (
			<Accordion
				id={lesson.id}
				key={lesson.id}
				lessons={lessons}
				title={lesson.name}
			>
				{lesson.sub_lessons?.map((sublesson) => (
					<Accordion
						id={sublesson.id}
						lessons={lessons}
						key={sublesson.id}
						title={sublesson.name}
					>
						{sublesson?.sub_lesson_2s.map((material) => (
							<AccordionItem
								id={material.id}
						
								available={lesson.available || isAdmin}
								key={material.id}
								title={material.name}
							/>
						))}
					</Accordion>
				))}
			</Accordion>
		))
	) : (
		<H4>Error :(</H4>
	)

	return (
		<aside>
			<H4 mb={3}>Materials</H4>
			<div className={styles.right}>{isLoading ? <AsideSkeleton /> : list}</div>
		</aside>
	)
}

export default Aside

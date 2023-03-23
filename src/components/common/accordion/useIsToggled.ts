import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { ILesson } from "../../../shared/types/course.types"



export const useIsToggled = (
	lessons: ILesson[],
	id: number,
	setValue: (bool: boolean) => void
) => {
	const { materialId } = useParams()
	useEffect(() => {
		if (materialId && lessons) {
			const lesson = lessons.find((sublessons) =>
				sublessons.sub_lessons.find((materials) =>
					materials.sub_lesson_2s.find(
						(material) => material.id === Number(materialId)
					)
				)
			)
			const isActive = lesson?.sub_lessons.find((materials) =>
				materials.sub_lesson_2s.find(
					(material) => material.id === Number(materialId)
				)
			)
		

			const bool = lesson?.id === id || isActive?.id === id
			setValue(bool)
		}
	}, [materialId])
}
//
// lesson?.sub_lessons.some((materials) =>
// 					materials.sub_lesson_2s.some(
// 						(material) => material.id === Number(materialId)
// 					)
// 				)

// const isActive = course.lessons.find((lesson) =>
// lesson.sub_lessons.find((sub) => sub.sub_lesson_2s.find((item) => item.id == courseId))
// );
// if (isActive && (isActive.id == id || isActive.sub_lessons.some((sub) => sub.id == id))) {
// setActive(true);
// }

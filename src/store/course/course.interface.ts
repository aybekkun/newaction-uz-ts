import { IMaterialResponse } from "../../services/material/material.interface"
import { IOneCourse } from "../../shared/types/course.types"

export interface ICourseState {
	courses: IOneCourse | null | undefined
	material: IMaterialResponse | null | undefined
}

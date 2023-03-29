import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

import { IMaterialResponse } from "../../services/material/material.interface"
import { IOneCourse } from "../../shared/types/course.types"

import { ICourseState } from "./course.interface"

const initialState: ICourseState = {
  courses: null,
  material: null,


}

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourse(state, action: PayloadAction<IOneCourse>) {
      state.courses = action.payload
    },
    setMaterial(state, action: PayloadAction<IMaterialResponse>) {
      state.material = action.payload
    },
  },
  extraReducers: (builder) => {},
})

export const { setCourse, setMaterial } = courseSlice.actions

export default courseSlice.reducer

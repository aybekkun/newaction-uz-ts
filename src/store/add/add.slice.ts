import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

import { IAddState, SelectItemType } from "./add.interface"

const initialState: IAddState = {
  open: false,
  lesson: null,
  sublesson: null,
  type: "lesson",
  addDraweOpen: false,
  tabs: 0,
}

export const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    setEditLesson(state, action: PayloadAction<SelectItemType>) {
      state.type = "lesson"
      state.lesson = action.payload
      state.open = true
    },
    setEditSublesson(state, action: PayloadAction<SelectItemType>) {
      state.type = "sublesson"
      state.sublesson = action.payload
      state.open = true
    },
    setOpen(state, action: PayloadAction<boolean>) {
      state.open = action.payload
    },
    setAddLesson(state) {
      state.tabs = 0
      state.type = "lesson"
      state.addDraweOpen = true
    },
    setAddSublesoon(state) {
      state.tabs = 0
      state.type = "sublesson"
      state.addDraweOpen = true
    },
    setAddMaterial(state) {
      state.tabs = 1
      state.type = "material"
      state.addDraweOpen = false
    },
    setAddDrawerOpen(state, action: PayloadAction<boolean>) {
      state.addDraweOpen = action.payload
    },
    setType(state, action: PayloadAction<"lesson" | "sublesson" | "material">) {
      state.type = action.payload
    },
  },
  extraReducers: (builder) => {},
})

export const {
  setEditLesson,
  setEditSublesson,
  setOpen,
  setAddDrawerOpen,
  setType,
  setAddMaterial,
  setAddSublesoon,
  setAddLesson,
} = addSlice.actions

export default addSlice.reducer

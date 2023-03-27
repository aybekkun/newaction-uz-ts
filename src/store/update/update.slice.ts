import { createSlice } from "@reduxjs/toolkit"

import { IUpdateUserState } from "./update.interface"

const initialState: IUpdateUserState = {
  userUpdate: {
    user_name: "",
    role: "",
    id: 0,
    phone: "",
  },
  open: false,
  type: "password",
}

export const updateSlice = createSlice({
  name: "update",
  initialState,
  reducers: {
    setOpen(state, action) {
      state.open = action.payload
    },
    setUserUpdate(state, action) {
      state.userUpdate = action.payload
    },
    setType(state, action) {
      state.type = action.payload
    },
  },
  extraReducers: (builder) => {},
})
export const { setOpen, setUserUpdate, setType } = updateSlice.actions
export default updateSlice.reducer

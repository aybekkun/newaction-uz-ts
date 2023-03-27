export interface IUpdateUserState {
  userUpdate: {
    user_name: string
    role: string
    id: string | number
    phone: string
  }
  open: false
  type: "password" | "all"
}

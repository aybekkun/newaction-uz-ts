export interface IAddState {
  open: boolean
  lesson: SelectItemType | null
  sublesson: SelectItemType | null
  type: "lesson" | "sublesson" | "material"
  addDraweOpen:boolean
  tabs:number
}

export type SelectItemType = {
  id: string | number
  name: string
}

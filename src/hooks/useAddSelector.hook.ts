
import useAppSelector from "./useAppSelector.hook"

export const useAddSelector = () => {
  const add = useAppSelector((state) => state.add)
  return add
}

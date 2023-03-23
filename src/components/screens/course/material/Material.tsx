import { FC } from "react"

import EditerParser from "../../../editer/parser/EditerParser"
import Test from "../../../editer/parser/Test"
import Error from "../../../ui/error/Error"
import MaterialSkeleton from "../../../ui/skeletons/MaterialSkeleton"

import ArrowButtons from "./ArrowButtons"
import styles from "./Material.module.scss"
import { useMaterial } from "./useMaterial"

const Material: FC = () => {
 const { data, isError, isLoading } = useMaterial()

 if (isError) {
  return <Error />
 }
 if (isLoading) {
  return (
   <div className={styles.root}>
    <MaterialSkeleton />
   </div>
  )
 }
 if (!data) {
  return (
   <div className={styles.root}>
    <h2>┐( ˘_˘)┌ empty</h2>
   </div>
  )
 }
 return (
  <div className={styles.root}>
   {data.name.toLowerCase() === "test" ? (
    <Test blocks={data.data} />
   ) : (
    <EditerParser blocks={data.data || []} />
   )}

   <ArrowButtons next_id={data.next_id} previos_id={data?.previos_id} />
  </div>
 )
}
export default Material

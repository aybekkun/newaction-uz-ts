import { Avatar, Button } from "@mui/material"
import { FC } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "react-query"
import { useParams } from "react-router-dom"

import { useAuth } from "../../../../../hooks/useAuth.hooks"
import styles from "../Comments.module.scss"

import { useCreateMaterialComments } from "./useCreateMaterialComments"

type FormType = {
  message: string
}
type CreateCommentsProps = {
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<any, unknown>>
}
const CreateComments: FC<CreateCommentsProps> = ({ refetch }) => {
  const { materialId } = useParams()
  const { user } = useAuth()
  const { mutate } = useCreateMaterialComments()
  const {
    handleSubmit,
    control,
    formState: { isValid },
    reset,
  } = useForm<FormType>({
    mode: "onChange",
    defaultValues: {
      message: "",
    },
  })
  const onSubmit: SubmitHandler<FormType> = async (data) => {
    reset()
    if (materialId) {
      await mutate({ sub_lesson_2_id: materialId, message: data.message })
      setTimeout(() => {
        refetch()
      }, 1500)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.comments}>
        <Avatar>{user?.name.at(0)}</Avatar>
        <div className={styles.text}>
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <>
                <textarea
                  value={field.value}
                  minLength={1}
                  maxLength={300}
                  required
                  onChange={field.onChange}
                  className={styles.textarea}
                ></textarea>
              </>
            )}
            rules={{ minLength: 1, maxLength: 300, required: true }}
          />
          <Button disabled={!isValid} type="submit">
            Send
          </Button>
        </div>
      </div>
    </form>
  )
}

export default CreateComments

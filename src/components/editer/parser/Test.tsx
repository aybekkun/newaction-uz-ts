import cn from "classnames"
import { FC, useId, useMemo, useState } from "react"
import { useMutation } from "react-query"
import { toastr } from "react-redux-toastr"

import { useAuth } from "../../../hooks/useAuth.hooks"
import { useCourseSelector } from "../../../hooks/useCourseSelector.hook"
import { ITestCheck } from "../../../services/checkTest/checkTest.interface"
import { TestCheckService } from "../../../services/checkTest/checkTest.service"
import { onScrollTop } from "../../../utils/onScrollTop"
import MyButton from "../../ui/MyButton/MyButton"
import H2 from "../../ui/heading/H2"
import Radiobox from "../../ui/radio/Radiobox"
import styles from "../Editer.module.scss"

import EditerParser from "./EditerParser"

type TestProps = {
  blocks: any[]
  isInner?: boolean
}
type ItemType = {
  text: string | null
  checked: boolean
}
type CheckedArrType = {
  arr: ItemType[]
  blockIndex: number
  itemIndex: number
}
const Test: FC<TestProps> = ({ blocks, isInner = false }) => {
  const id = useId()
  const { material } = useCourseSelector()
  const { user } = useAuth()
  const { mutate } = useMutation(async (data: ITestCheck) => TestCheckService.create(data), {
    onSuccess: (data) => {
      toastr.success("Test", "Test created watch result")
    },
    onError: (error) => {
      //@ts-ignore
      toastr.success("Oops, something get wrong", JSON.stringify(error.message))
    },
  })

  const [checkedArr, setCheckedArr] = useState<CheckedArrType[]>([])
  const [checked, setChecked] = useState(false)
  const [count, setCount] = useState(0)
  //входящие все тесты
  const tests = useMemo(() => {
    return blocks?.filter((item) => item.type === "checklist").map((item) => item.data?.items) || []
  }, [blocks])

  const onClickTest = (arr: ItemType[], itemIndex: number, blockIndex: number) => {
    if (!checkedArr) {
      const checkedFilter: CheckedArrType[] = [{ arr, blockIndex: blockIndex, itemIndex: itemIndex }]
      setCheckedArr(checkedFilter)
    } else {
      const checkedFilter: CheckedArrType[] = [
        ...checkedArr.filter((item) => item.blockIndex !== blockIndex),
        { arr, blockIndex: blockIndex, itemIndex: itemIndex },
      ]
      setCheckedArr(checkedFilter)
    }
  }
  const onClickCheck = async () => {
    if (tests.length === checkedArr.length) {
      let result = 0
      checkedArr.map((item) => {
        if (item.arr[item?.itemIndex]?.checked) {
          result++
        }
        return 0
      })
      setCount(result)
      setChecked(true)
      if (!isInner && material && user) {
        onScrollTop()
        mutate({ lesson_id: material?.lesson_id, user_id: user.id, overall: result, number: tests.length })
      }
    } else {
      toastr.info("Warrning", "Check all questions")
    }
  }
  const onClickAgain = () => {
    if (!isInner) {
      onScrollTop()
    }
    setChecked(false)
    setCheckedArr([])
    setCount(0)
  }
  return (
    <div className={styles.test}>
      <div
        className={cn(styles.result, {
          [styles.active]: checked && !isInner,
        })}
      >
        <H2>Result</H2>
        <div className={styles.box}>
          <div className={styles.range}>
            <div style={{ width: `${(count / tests.length) * 100}%` }} className={styles.item}></div>
          </div>
          <span>{`${count}/${tests.length}`}</span>
        </div>
      </div>
      {!checked ? (
        blocks.map((block, blockIndex) => {
          switch (block.type) {
            case "checklist":
              const checkedId = checkedArr.find((item) => item.blockIndex === blockIndex)?.itemIndex
              return block.data.items.map((item: ItemType, itemIndex: number) => (
                <Radiobox
                  key={itemIndex}
                  checked={checkedId === itemIndex}
                  onClick={() => onClickTest(block.data.items, itemIndex, blockIndex)}
                  name={String(blockIndex) + id}
                  text={item.text ?? ""}
                />
              ))
            default:
              return <EditerParser key={blockIndex} blocks={[block]} />
          }
        })
      ) : (
        <>
          {blocks.map((block, blockIndex) => {
            switch (block.type) {
              case "checklist":
                const checkedId = checkedArr.find((item) => item.blockIndex === blockIndex)?.itemIndex

                return block.data.items.map((item: ItemType, itemIndex: number) => (
                  <Radiobox
                    key={itemIndex}
                    right={item.checked && checkedId === itemIndex}
                    wrong={!item.checked && checkedId === itemIndex}
                    checked={checkedId === itemIndex}
                    name={String(blockIndex) + id}
                    text={item.text ?? ""}
                  />
                ))
              default:
                return <EditerParser key={blockIndex} blocks={[block]} />
            }
          })}
        </>
      )}

      {checked ? (
        <MyButton sx={{ mb: 2 }} onClick={onClickAgain}>
          Check Again
        </MyButton>
      ) : (
        <MyButton sx={{ mb: 2 }} onClick={onClickCheck}>
          Check
        </MyButton>
      )}
    </div>
  )
}

export default Test
// const checkedId = checkedArr.find((item) => item.blockIndex === blockIndex)?.itemIndex
// return checkedArr
//  .find((item) => block.blockIndex === blockIndex)
//  ?.arr.map((item, itemIndex) => (
//   <Radiobox
//    key={item.text}
//    right={item.checked}
//    wrong={!item.checked && checkedId === itemIndex}
//    checked={true}
//    name={String(blockIndex)}
//    text={item.text ?? ""}
//   />
//  ))

import { Button, ButtonProps } from "@mui/material"
import { SxProps } from "@mui/material/styles"
import cn from "classnames"
import { FC } from "react"
import { useNavigate } from "react-router-dom"

import { useAuth } from "../../../hooks/useAuth.hooks"
import {PROFILE_PAGE, SIGNUP_PAGE} from "../../../shared/constants/route";

type MyStartButtonProps = {
  children?: React.ReactNode | React.ReactNode[]
  className?: string
  sx?: SxProps
} & ButtonProps

const MyStartButton: FC<MyStartButtonProps> = ({ className = " ", sx = {}, ...props }) => {
  const { user } = useAuth()

  const navigate = useNavigate()
  const onClickStart = () => {
    if (!user) {
      navigate(SIGNUP_PAGE)
    } else {
        navigate(PROFILE_PAGE)
    }
  }
  return (
    <Button
        onClick={onClickStart}
      sx={{
        padding: "16px 40px",
        bgcolor: "#00BCF1",
        fontSize: "16px",
        lineHeight: "19px",
        "&:hover": {
          bgcolor: "#007DA0",
        },
        ...sx,
      }}
      variant="contained"
      className={cn(className)}
    >
      Boshlash
    </Button>
  )
}

export default MyStartButton

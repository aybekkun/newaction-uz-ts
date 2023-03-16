import { Button, ButtonProps } from "@mui/material"
import { SxProps } from "@mui/material/styles"
import cn from "classnames"
import { FC } from "react"

type MyButtonProps = {
	children?: React.ReactNode | React.ReactNode[]
	className?: string
	sx?: SxProps
} & ButtonProps

const MyButton: FC<MyButtonProps> = ({
	className = " ",
	children,
	sx = {},
	...props
}) => {
	return (
		<Button
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
			{...props}
		>
			{children}
		</Button>
	)
}

export default MyButton

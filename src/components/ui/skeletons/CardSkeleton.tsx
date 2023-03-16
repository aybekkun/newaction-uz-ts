import { Skeleton } from "@mui/material"
import { FC } from "react"

const CardSkeleton: FC = () => {
	return (
		<div>
			<Skeleton
				variant="rounded"
				sx={{ marginBottom: "12px" }}
				width={285}
				height={184}
			/>
			<Skeleton
				variant="rounded"
				sx={{ marginBottom: "12px" }}
				width={285}
				height={30}
			/>
			<Skeleton
				variant="rounded"
				sx={{ marginBottom: "12px" }}
				width={285}
				height={30}
			/>
		</div>
	)
}

export default CardSkeleton

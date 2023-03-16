import { Skeleton } from "@mui/material"
import { FC } from "react"

const AsideSkeleton: FC = () => {
	return (
		<>
			{[...Array(5)].map((_, i) => (
				<Skeleton
					key={i}
					variant="rounded"
					sx={{ marginBottom: "12px" }}
					height={60}
					width={"100%"}
				/>
			))}
		</>
	)
}

export default AsideSkeleton

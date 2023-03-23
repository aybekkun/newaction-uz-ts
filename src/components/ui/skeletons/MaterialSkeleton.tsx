import { Skeleton } from "@mui/material"
import { FC } from "react"

const MaterialSkeleton: FC = () => {
	return (
		<>
			<Skeleton variant="text" height={60} width={"100%"} />
			<Skeleton
				variant="rounded"
				sx={{ marginBottom: "12px" }}
				height={300}
				width={"100%"}
			/>
			{[...Array(2)].map((_, i) => (
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

export default MaterialSkeleton

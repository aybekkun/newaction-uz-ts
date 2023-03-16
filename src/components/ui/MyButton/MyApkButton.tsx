import { Button } from "@mui/material"
import { FC } from "react"
import markteImg from "./market.png"
const MyApkButton: FC = () => {
	return (
		<a
			style={{ display: "block" }}
			href="https://play.google.com/store/apps/details?id=com.karsoft.newcastletest&pli=1"
			target="_blank"
			rel="noreferrer"
		>
			<Button sx={{ display: "block", mt: 2, width: 200, bgcolor: "#000" }}>
				<img src={markteImg} alt="Google play" />
			</Button>
		</a>
	)
}

export default MyApkButton

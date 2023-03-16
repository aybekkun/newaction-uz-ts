import { FC } from "react"

import AdvantageSection from "./sections/advantageSection/AdvantageSection"
import AppSection from "./sections/appSection/AppSection"
import CertificateSection from "./sections/certificateSection/CertificateSection"
import PencilSection from "./sections/pencilSection/PencilSection"
import PopularSection from "./sections/popularSection/PopularSection"
import PrepareSection from "./sections/prepareSection/PrepareSection"
import StudentSection from "./sections/studentSection/StudentSection"
import TopSection from "./sections/topSection/TopSection"
import WhySection from "./sections/whySection/WhySection"

const Home: FC = () => {
	return (
		<>
			<TopSection />
			<PopularSection/>
			<WhySection />
			<CertificateSection />
			<AdvantageSection />
			<PrepareSection />
			<StudentSection />
			<AppSection />
			<PencilSection />
		</>
	)
}

export default Home

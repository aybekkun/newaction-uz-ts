import { FC } from "react"

import PopularSection from "../../components/screens/home/sections/popularSection/PopularSection"
import SEO from "../../utils/seo/SEO"

const CoursesPage: FC = () => {
  return (
    <>
      <SEO
        title="Courses"
        description="ADVANCE YOUR CAREER
	Popular topics to learn now"
      />
      <PopularSection />
    </>
  )
}

export default CoursesPage

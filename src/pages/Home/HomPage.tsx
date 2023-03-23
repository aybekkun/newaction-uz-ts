import { FC } from "react"

import Home from "../../components/screens/home/Home"
import SEO from "../../utils/seo/SEO"

const HomePage: FC = () => {
  return (
    <>
      <SEO title="Home" description="newaction.uz oquv orayi" type=""/>
      <Home />
    </>
  )
}

export default HomePage

import { FC } from "react"
import { Helmet } from "react-helmet-async"
import { useLocation } from "react-router-dom"

import { siteName, titleMerge } from "../../configs/seo.configs"
import { onlyText } from "../string/clearText"

import { MetaNoIndex } from "./MetaNoIndex"

type SEOProps = {
  title: string
  description?: string
  type?: string
  keywords?: string
}
const SEO: FC<SEOProps> = ({ title, description, keywords = "Englis tili organish", type = "article" }) => {
  const { pathname } = useLocation()
  const currentUrl = "https://newaction.uz/" + pathname
  return (
    <>
      {description ? (
        <Helmet>
          {/* Standard metadata tags */}
          <title>{titleMerge(title)}</title>
          <meta name="description" content={description} />
          {/* End standard metadata tags */}
          {/* Facebook tags */}
          <meta property="keywords" content={keywords} />
          <meta property="og:type" content={type} />
          <meta property="og:title" content={titleMerge(title)} />
          <meta property="og:description" content={onlyText(description, 197)} />
          <meta property="og:url" content={currentUrl} />
          <meta property="og:site_name" content={siteName} />
          {/* End Facebook tags */}
          {/* Twitter tags */}
          {/*       <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={onlyText(description, 197)} />
      <meta name="twitter:url" content={currentUrl} /> */}
          {/* End Twitter tags */}
        </Helmet>
      ) : (
        <MetaNoIndex title={title} />
      )}
    </>
  )
}
export default SEO

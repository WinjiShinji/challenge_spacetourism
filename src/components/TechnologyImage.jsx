import { useContext } from "react"
import SiteContext from "../context/siteContext"

const TechnologyImage = () => {
  const { techImg, techInfo } = useContext(SiteContext)
  return (
    <div className="technology_image">
      <picture>
        <source srcSet={techImg[0]} media="(min-width: 1440px)" />
        <img src={techImg[1]} alt={`${techInfo.alt}`} />
      </picture>
    </div>
  )
}

export default TechnologyImage
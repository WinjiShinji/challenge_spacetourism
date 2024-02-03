import { useContext } from "react"
import SiteContext from "../context/siteContext"

const TechnologyInfo = () => {
  const { techInfo } = useContext(SiteContext)
  return (
    <div className="technology_info">
      <h2>The Terminology...</h2>
      <h3>{techInfo.name}</h3>
      <p>{techInfo.description}</p>
    </div>
  )
}

export default TechnologyInfo
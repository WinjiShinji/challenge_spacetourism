import { useContext } from "react"
import SiteContext from "../context/siteContext"

const CrewInfo = () => {
  const { crewInfo } = useContext(SiteContext)
  return (
    <div className="crew_info">
      <h2>{crewInfo.role}</h2>
      <h3>{crewInfo.name}</h3>
      <p>{crewInfo.bio}</p>
    </div>
  )
}

export default CrewInfo
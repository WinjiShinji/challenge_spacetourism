import { useContext } from "react"
import SiteContext from "../context/siteContext"

const CrewImage = () => {
  const { crewInfo, crewImg } = useContext(SiteContext)
  return (
    <div className="crew_image">
      <img 
        src={crewImg} 
        alt={`${crewInfo.name}, your ${crewInfo.role}`} 
      />
    </div>
  )
}

export default CrewImage
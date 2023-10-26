import { useContext } from "react"
import SiteContext from "../context/siteContext"
import DestinationMenu from "./DestinationMenu"

const DestinationInfo = () => {
  const { destInfo } = useContext(SiteContext)
  // console.log(destInfo)
  return (
    <div className="destination_info">
      <DestinationMenu />
      <h2>{destInfo.name}</h2>
      <p>
        {destInfo.description}
      </p>
      <div className="destination_separator"></div>
      <div className="destination_stats">
        <div>avg. distance <br />
          <p>{destInfo.distance}</p>
        </div>
        <div>est. travel time <br />
          <p>{destInfo.travel}</p>
        </div>
      </div>
    </div>
  )
}

export default DestinationInfo
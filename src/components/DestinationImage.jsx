import { useContext } from "react"
import SiteContext from "../context/siteContext"

const DestinationImage = () => {
  const { destInfo, destImg } = useContext(SiteContext)
  return (
    <div className="destination_image">
      <img 
        src={destImg} 
        alt={`The ${destInfo.name} as viewed above from outer space`} 
      />
    </div>
  )
}

export default DestinationImage
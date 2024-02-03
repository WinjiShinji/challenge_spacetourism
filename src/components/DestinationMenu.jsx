import { useContext } from "react"
import SiteContext from "../context/siteContext"

const DestinationMenu = () => {
  const { destData, destInfo, dispatch } = useContext(SiteContext)
  return (
    <ul className="destination_menu">
      {destData.map(item => (
        <li
          key={item.name}
          className={`${item.name === destInfo.name ? 'active' : ''}`}
          onClick={() => {
            dispatch({ type: 'destName', payload: item.name })
          }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  )
}

export default DestinationMenu
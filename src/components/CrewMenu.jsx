import { useContext } from "react"
import SiteContext from "../context/siteContext"

const CrewMenu = () => {
  const { crewData, crewInfo, dispatch } = useContext(SiteContext)
  return (
    <div className="crew_menu">
      {crewData.map(item => (
        <button
          key={item.role}
          className={`${ item.role === crewInfo.role ? 'active' : ''}`}
          onClick={() => {
            dispatch({ type: "crewRole", payload: item.role })
          }}
        ></button>
      ))}
    </div>
  )
}

export default CrewMenu
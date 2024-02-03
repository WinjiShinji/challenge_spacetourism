import { useContext } from "react"
import SiteContext from "../context/siteContext"

const TechnologyMenu = () => {
  const { techData, techInfo, dispatch } = useContext(SiteContext)
  let i = 1
  return (
    <ol className="tech_menu">
      {techData.map(item => (
        <li
          key={item.name}
          className={`${ techInfo.name === item.name ? 'active' : '' }`}
          onClick={() => {
            dispatch({ type: 'techName', payload: item.name})
          }}
        >
          {i++}
        </li>
      ))}
    </ol>
  )
}

export default TechnologyMenu
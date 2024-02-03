import { createContext, useReducer } from "react";
// Assets
import assets from "../data/assetList";
// Data
import DB from "../data/data.json"

const SiteContext = createContext({})

// Reducer Logic
const reducer = (state, action) => {
  switch (action.type) {
    case 'destName':
      return {
        ...state,
        destName: action.payload.toLowerCase()
      }
      case 'crewRole':
        return {
          ...state,
          crewRole: action.payload.toLowerCase()
        }
      case 'techName':
        return {
          ...state,
          techName: action.payload.toLowerCase()
        }
    default: 
      return state
  }
}

export const SiteProvider = ({ children }) =>  {
  // Initial Reducer State
  const [state, dispatch] = useReducer(reducer, { 
    destName: `${DB.destinations[0].name.toLowerCase()}`,
    crewRole: `${DB.crew[0].role.toLowerCase()}`,
    techName: `${DB.technology[0].name.toLowerCase()}`,
  })

  // Destination
  const destInfo = DB.destinations.find(item => item.name.toLowerCase() === state.destName)
  const destImg = assets.destinations[`${state.destName}`]
  // Crew
  const crewInfo = DB.crew.find(item => item.role.toLowerCase() === state.crewRole)
  const crewImg = assets.crew[`${state.crewRole}`]
  // Technology
  const techInfo = DB.technology.find(item => item.name.toLowerCase() === state.techName)
  const techImg = assets.tech[`${state.techName}`]

  // DB Abstraction
  const destData = DB.destinations
  const crewData = DB.crew
  const techData = DB.technology

  return (
    <SiteContext.Provider value={{
      destInfo, destImg, destData,
      crewInfo, crewImg, crewData,
      techInfo, techImg, techData,
      dispatch,
      
    }}>
      { children }
    </SiteContext.Provider>
  )
}

export default SiteContext
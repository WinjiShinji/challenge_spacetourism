import CrewImage from "../components/CrewImage"
import CrewInfo from "../components/CrewInfo"
import CrewMenu from "../components/CrewMenu"

const Crew = () => {
  return (
    <section className="crew">
      <h1><span>02</span>Meet Your Crew</h1>
      <div className="crew_container">
        <CrewImage />
        <CrewMenu />
        <CrewInfo />
      </div>
    </section>
  )
}

export default Crew
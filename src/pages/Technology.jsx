import TechnologyImage from "../components/TechnologyImage"
import TechnologyInfo from "../components/TechnologyInfo"
import TechnologyMenu from "../components/TechnologyMenu"

const Technology = () => {
  return (
    <section className="technology">
      <h1><span>03</span>Space Launch 101</h1>
      <div className="technology_container">
        <TechnologyImage />
        <TechnologyMenu />
        <TechnologyInfo />
      </div>
    </section>
  )
}

export default Technology
import DestinationImage from "../components/DestinationImage"
import DestinationInfo from "../components/DestinationInfo"

const Destination = () => {
  return (
    <section className="destination">
      <h1><span>01</span>Pick your destination</h1>
      <div className="destination_container">
        <DestinationImage />
        <DestinationInfo />
      </div>
    </section>
  )
}

export default Destination
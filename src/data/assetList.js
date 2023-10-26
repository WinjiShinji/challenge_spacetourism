// Destinations
import moonPNG from '../assets/destination/image-moon.png'
import marsPNG from '../assets/destination/image-mars.png'
import europaPNG from '../assets/destination/image-europa.png'
import titanPNG from '../assets/destination/image-titan.png'
// Crew
import commanderPNG from '../assets/crew/image-douglas-hurley.png'
import specialistPNG from '../assets/crew/image-mark-shuttleworth.png'
import pilotPNG from '../assets/crew/image-victor-glover.png'
import flightPNG from '../assets/crew/image-anousheh-ansari.png'
// Technology
import launchPort from '../assets/technology/image-launch-vehicle-portrait.jpg'
import launchLand from '../assets/technology/image-launch-vehicle-landscape.jpg'
import spaceportPort from '../assets/technology/image-spaceport-portrait.jpg'
import spaceportLand from '../assets/technology/image-spaceport-landscape.jpg'
import capsulePort from '../assets/technology/image-space-capsule-portrait.jpg'
import capsuleLand from '../assets/technology/image-space-capsule-landscape.jpg'

const assets = {
  destinations: {
    'moon': moonPNG,
    'mars': marsPNG,
    'europa': europaPNG,
    'titan': titanPNG
  },
  crew: {
    'commander': commanderPNG,
    'mission specialist': specialistPNG,
    'pilot': pilotPNG,
    'flight engineer': flightPNG
  },
  tech: {
    'launch vehicle': [launchPort, launchLand],
    'spaceport': [spaceportPort, spaceportLand],
    'space capsule': [capsulePort, capsuleLand]
  },
}

export default assets
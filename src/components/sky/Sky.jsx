import DarkSky from './DarkSky'
import LightStars from './LightStars'

const Sky = ({ isLight }) => {
	return <>{isLight ? <LightStars /> : <DarkSky />}</>
}

export default Sky

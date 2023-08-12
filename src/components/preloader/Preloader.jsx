import logo from './space_logo.svg'
import { CircleNotch } from '@phosphor-icons/react'

const Preloader = () => {
	return (
		<div className='preloader'>
			<img alt='' src={logo} className='preloader_logo' />
			<img alt='' src={logo} className='preloader_logo_back' />
			{/* <CircleNotch weight="bold" className="icon_min preloader-notch" /> */}
		</div>
	)
}

export default Preloader

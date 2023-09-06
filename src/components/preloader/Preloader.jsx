import { useEffect } from 'react'
import logo from './space_logo.svg'
import { CircleNotch } from '@phosphor-icons/react'

const Preloader = ({isLoading, isThemeDetector}) => {
	const updateThemeColor = color => {
		const metaThemeColor = document.querySelector('meta[name=theme-color]')
		if (metaThemeColor) {
			metaThemeColor.setAttribute('content', color)
		}
	}

	useEffect(() => {
		if (isLoading) {
			updateThemeColor('black')
		} else {
			updateThemeColor(isThemeDetector ? '#ededed' : '#000000')
		}
	}, [isLoading, isThemeDetector])

	return (
		<div className='preloader'>
			<img alt='' src={logo} className='preloader_logo' />
			<img alt='' src={logo} className='preloader_logo_back' />
		</div>
	)
}

export default Preloader

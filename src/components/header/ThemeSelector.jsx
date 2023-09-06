import { Sun, Moon, Devices } from '@phosphor-icons/react'

export const ThemeSelector = () => {
	return <div className='theme-selector-wrapper'>
		<div className='theme-selector-item select'>
			<Sun weight="bold" className="icon_min"/>
		</div>
		<div className='theme-selector-item select'>
			<Moon weight="bold" className="icon_min"/>
		</div>
		<div className='theme-selector-item select' style={{backgroundColor: 'var(--var-push)'}}>
			<Devices weight="bold" className="icon_min"/>
		</div>
</div>
}

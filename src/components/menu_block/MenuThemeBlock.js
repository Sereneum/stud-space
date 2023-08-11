import React, { useContext } from 'react'
import { Moon, StarAndCrescent, Sun } from '@phosphor-icons/react'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import { themeManager } from '../../managers/themeManager'

const MenuThemeBlock = observer(() => {
	const { localConfig } = useContext(Context)

	const setTheme = newTheme => {
		themeManager(localConfig).setStore(newTheme)
		themeManager(localConfig).setStyle()

		// Получение значения из localStorage
		const theme = localStorage.getItem('theme')

		// Проверка значения и изменение theme-color
		if (theme === 'light') {
			document
				.querySelector('meta[name="theme-color"]')
				.setAttribute('content', '#ededed')
		} else if (theme === 'dark') {
			document
				.querySelector('meta[name="theme-color"]')
				.setAttribute('content', 'black')
		} else if (theme === 'system') {
			// Если значение 'system', изменить на основе темы устройства
			const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
			if (mediaQuery.matches) {
				document
					.querySelector('meta[name="theme-color"]')
					.setAttribute('content', '#ededed')
			} else {
				document
					.querySelector('meta[name="theme-color"]')
					.setAttribute('content', 'black')
			}
		}
	}

	const invBg = theme => (localConfig.theme === theme ? 'enabled_invert' : '')

	const invTxt = theme =>
		localConfig.theme === theme ? 'theme_enabled_text' : ''

	return (
		<div className='content_cover'>
			<div className='content_elem_column'>
				<p>Оформление</p>
				<div className='container_row_start'>
					{/*  LIGHT  */}
					<div
						className='theme_item_container'
						onClick={() => setTheme('light')}
					>
						<div className={`theme_circle ${invBg('light')}`}>
							<Sun weight='bold' className='icon_big' />
						</div>
						<p className={`theme_text ${invTxt('light')}`}>Светлое</p>
					</div>
					{/*  DARK  */}
					<div
						className='theme_item_container'
						onClick={() => setTheme('dark')}
					>
						<div className={`theme_circle ${invBg('dark')}`}>
							<Moon weight='bold' className='icon_big' />
						</div>
						<p className={`theme_text ${invTxt('dark')}`}>Темное</p>
					</div>

					{/*  SYSTEM  */}
					<div
						className='theme_item_container'
						onClick={() => setTheme('system')}
					>
						<div className={`theme_circle ${invBg('system')}`}>
							<StarAndCrescent weight='bold' className='icon_big' />
						</div>
						<p className={`theme_text ${invTxt('system')}`}>Системное</p>
					</div>
				</div>
			</div>
		</div>
	)
})

export default MenuThemeBlock

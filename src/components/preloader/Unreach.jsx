import { LinkBreak } from '@phosphor-icons/react'

const Unreach = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '15px',
				alignItems: 'center',
				paddingBottom: '20px',
			}}
		>
			<LinkBreak
				className='preloader_logo icon_big'
				style={{ color: 'red', width: '60px', height: '60px', margin: '0' }}
			/>
			<p style={{ textAlign: 'center', color: 'white', lineHeight: '1.5' }}>
				Не удалось установить связь со stud.mgri.ru <br />
				Попробуйте войти позднее.
			</p>
		</div>
	)
}

export default Unreach

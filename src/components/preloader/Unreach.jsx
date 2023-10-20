import { CloudWarning } from '@phosphor-icons/react'

const Unreach = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '6px',
				alignItems: 'center',
				paddingBottom: '20px',
			}}
		>
			<CloudWarning
				className='preloader_logo icon_big'
				style={{ color: 'white', width: '50px', height: 'auto' }}
			/>
			<p style={{ textAlign: 'center', color: 'white' }}>
				В данный момент сервера stud недоступны. <br />
				Попробуйте позже.
			</p>
		</div>
	)
}

export default Unreach

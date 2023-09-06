import { useRef, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

const LightStars = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 1300px)' })
	const radius = isMobile ? 0.1 : 0.25
	const canvasRef = useRef(null)

	let colors = {
		bg: '#ededed',
		star: opacity => `rgba(0, 0, 0, ${opacity})`,
		life: 0.5,
	}

	useEffect(() => {
		const canvas = canvasRef.current
		canvas.width = canvas.clientWidth
		canvas.height = canvas.clientHeight
		const ctx = canvas.getContext('2d')
		let animationFrameId

		const createStars = () => {
			const stars = []
			let fullLifeTime = 300
			for (let i = 0; i < 75; i++) {
				stars.push({
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					fullLifeTime: fullLifeTime,
					life: Math.random() * fullLifeTime,
					radius: Math.random() + radius,
				})
			}
			return stars
		}

		const opacityController = (life, full) => {
			return life / full > colors.life ? life / full : 1 - life / full
		}

		const drawStars = stars => {
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			ctx.fillStyle = colors.bg
			ctx.fillRect(0, 0, canvas.width, canvas.height)
			stars.forEach(star => {
				ctx.beginPath()
				// ctx.fillStyle = `rgba(255, 255, 255, ${opacityController(star.life, star.fullLifeTime)})`
				ctx.fillStyle = colors.star(
					opacityController(star.life, star.fullLifeTime)
				)
				ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
				ctx.fill()
			})
		}

		const updateStars = stars => {
			stars.forEach(star => {
				// Движение
				star.x += 0.01
				star.y += 0.07

				if (star.x < -star.radius) star.x = canvas.width + star.radius
				if (star.x > canvas.width + star.radius) star.x = 0
				if (star.y < -star.radius) star.y = canvas.height + star.radius
				if (star.y > canvas.height + star.radius) star.y = 0

				// Мерцание

				star.life -= 1
				if (star.life < 0) {
					star.life = star.fullLifeTime
				}
			})
		}

		const render = stars => {
			animationFrameId = requestAnimationFrame(() => render(stars))
			updateStars(stars)
			drawStars(stars)
		}

		render(createStars())

		return () => {
			cancelAnimationFrame(animationFrameId)
		}
	}, [])

	return <canvas ref={canvasRef} className={'sky'} />
}

export default LightStars

import { useEffect, useState } from 'react'
import {
	dateGetter,
	parserDateNow,
	toTextFormatMonth,
} from '../../managers/timeManager'
import { CSSTransition } from 'react-transition-group'
import { CaretDown } from '@phosphor-icons/react'

const ScheduleCalendar = ({
	weekID,
	updateWeek,
	isVisible,
	setIsVisible,
	calendar,
}) => {
	const validDate = dateGetter(weekID)

	const createMonth = weekID => new Date(weekID).getMonth()
	const createYear = weekID => new Date(weekID).getFullYear()

	const [year, setYear] = useState(weekID ? createYear(weekID) : '')
	const [month, setMonth] = useState(weekID ? createMonth(weekID) : '')

	const [table, setTable] = useState([])

	const getDaysInCurrentMonth = () =>
		new Date(validDate.getFullYear(), validDate.getMonth() + 1, 0).getDate()

	const fillTable = calendar => {
		let firstDay = new Date(year, month, 1).getDay()
		let days = getDaysInCurrentMonth()
		let offset = firstDay === 0 ? 6 : firstDay - 1
		let value = 0
		let mx = days - 1

		const isNow = (d1, d2) =>
			d1.getFullYear() === d2.getFullYear() &&
			d1.getMonth() === d2.getMonth() &&
			d1.getDate() === d2.getDate()

		const table = []
		for (let i = 0; i < 5; ++i) {
			table.push([])
			for (let j = 0; j < 7; ++j) {
				let cur = i * 5 + j
				if (!(cur >= offset && value <= mx)) {
					table[i].push('')
					continue
				}
				let createDayData = parserDateNow(new Date(year, month, ++value))
				let isOk = calendar.dates.indexOf(createDayData) !== -1

				table[i].push({
					value,
					isOk,
					strDate: createDayData,
					normalDate: new Date(year, month, value),
					isNow: isNow(validDate, new Date(year, month, value)),
				})
			}
		}

		return table
	}

	useEffect(() => {
		console.log('calendar: ', calendar)
		calendar && setTable(fillTable(calendar))
	}, [calendar, weekID, month, year])

	const previousMonth = () => {
		let minDate = new Date(calendar?.dates[0])
		let new_month = month - 1 < 0 ? 12 : month - 1
		let new_year = month - 1 < 0 ? year - 1 : year
		let new_date = new Date(new_year, new_month, 1)

		return minDate.getMonth() <= new_date.getMonth()
	}

	const nextMonth = () => {
		let maxDate = new Date(calendar?.dates[calendar?.dates.length - 1])
		let new_month = month + 1 > 12 ? 0 : month + 1
		let new_year = month + 1 > 12 ? year + 1 : year
		let new_date = new Date(new_year, new_month, 1)

		return maxDate.getMonth() >= new_date.getMonth()
	}

	const clickOnArrow = offset => {
		setMonth(month + offset)
	}

	const click = obj => {
		updateWeek(parserDateNow(obj.normalDate))
		setIsVisible(false)
	}

	return (
		<CSSTransition
			in={isVisible}
			timeout={200}
			classNames={'my-node'}
			unmountOnExit
		>
			<div className='calendar'>
				<div className='head'>
					{/*<img*/}
					{/*    src={show_icon}*/}
					{/*    alt=""*/}
					{/*    className={`${styles.arrow} ${!previousMonth() && styles.passiveArrow}`}*/}
					{/*    style={{rotate: '90deg'}}*/}
					{/*    onClick={() => {*/}
					{/*        previousMonth() && clickOnArrow(-1)*/}
					{/*    }}*/}
					{/*/>*/}
					<CaretDown
						weight='bold'
						className={`"arrow" ${!previousMonth() && 'passiveArrow'}`}
						style={{ rotate: '90deg' }}
						onClick={() => previousMonth() && clickOnArrow(-1)}
					/>
					<div className='month'>{`${toTextFormatMonth(month)}, ${year}`}</div>
					<CaretDown
						weight='bold'
						className={`"arrow" ${!nextMonth() && 'passiveArrow'}`}
						style={{ rotate: '270deg' }}
						onClick={() => {
							nextMonth() && clickOnArrow(+1)
						}}
					/>
				</div>

				{table.length && (
					<table className='calendar_box'>
						<thead className='days'>
							<tr className='days-container'>
								{['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((i, ind) => (
									<th key={i + ind}>{i}</th>
								))}
							</tr>
						</thead>

						<tbody className='calendar_date_pool'>
							{table.map((rows, rowIndex) => (
								<tr key={`r${rowIndex}`}>
									{rows.map((colm, colmIndex) => (
										<td
											key={`c${rowIndex * 7 + colmIndex}`}
											className={`${
												colm.isNow ? 'isNow' : colm.isOk ? 'isOk' : ''
											}`}
											onClick={() => click(colm)}
										>
											{colm.value}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</CSSTransition>
	)
}

export default ScheduleCalendar

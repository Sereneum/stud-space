import { GraduationCap, MapPin } from '@phosphor-icons/react'
import { isSameDate } from '../../managers/timeManager'

const ScheduleLesson = ({ lesson, isLast }) => {
	console.log(lesson)

	const typeStyle = les => {
		if (les.length > 3 && les.slice(0, 3) === 'лек') return 'lect'
		if (les.length > 3 && les.slice(0, 3) === 'пр.') return 'pract'
		if (les.length > 3 && les.slice(0, 3) === 'лаб') return 'lab'
		if (les.length > 3 && les.slice(0, 3) === 'экз') return 'exam'

		return ''
	}

	console.log(lesson['начало'], lesson['конец'], isSameDate(lesson['начало'], lesson['конец']))

	return (
		<>
			<div className='content_elem_column'>
				<div className='container_row_start'>
					{/* DATE LESSON*/}
					<div className={`lighter ${typeStyle(lesson['дисциплина'])}`}>
						<p className='text_lighter'>
							{`${lesson['начало']} - ${lesson['конец']}`}
						</p>
					</div>

					{/* ACTIVE LESSON MODE*/}
					{isSameDate(lesson['начало'], lesson['конец']) && <div className='lesson_active'></div>}
				</div>
				{/* TITLE LESSON*/}
				<h3>{lesson['дисциплина']}</h3>
				<div className='column_container_mini low_opacity'>
					<div className='container_row_start'>
						<GraduationCap weight='bold' className='icon_min' />
						<p>{lesson['преподаватель']}</p>
					</div>
					<div className='container_row_start'>
						<MapPin weight='bold' className='icon_min' />
						<p>{lesson['аудитория']}</p>
					</div>
				</div>
			</div>

			{!isLast && <div className='breaker'></div>}
		</>
	)
}

export default ScheduleLesson

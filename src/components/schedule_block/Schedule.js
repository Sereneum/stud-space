import { useContext, useEffect, useState } from 'react'
import { Context } from '../../index'
import { epoch_getMinorUserData, epoch_schedule } from '../../http/epochServer'
import ScheduleController from './ScheduleController'
import ScheduleWeek from './ScheduleWeek'
import { pointToSlash } from '../../managers/timeManager'
import { sch_parser } from '../../managers/schManager'
import LoaderSchedule from '../loaders/LoaderSchedule'
import {observer} from "mobx-react-lite";

const Schedule = observer(() => {

	const { user, localConfig} = useContext(Context)
	const [weekData, setWeekData] = useState({})
	const [weekID, setWeekID] = useState(pointToSlash(new Date())); // pointToSlash(new Date())
	const [isLoading, setIsLoading] = useState(true)
	// const [isState, setIsState] = useState(0);
	//
	// useEffect(() => {
	// 	// console.log('isState -> ', isState);
	// }, [isState]);

	const id = user.userData.anotherID
	// console.log('weekID = ', weekID)

	/* проверяет доп. данные, загружает календарь и лекции выбранной недели */
	const sequence = async () => {
		// нет доп. данных
		const isEmptyMinor = !Object.keys(user.minorUserData).length
		const isCalendar = !!Object.keys(user.calendar).length

		if (isEmptyMinor)
			await epoch_getMinorUserData(id).then(r =>
				user.setMinorUserData(r.data.data)
			)

		// console.log(user.minorUserData)
		const groupID = user.minorUserData.group.item2

		await epoch_schedule({ groupID, weekID, isCalendar }).then(r => {
			// console.log(r)
			if (!isCalendar) user.setCalendar(r[1])
			setWeekData(sch_parser(r[0].rasp, weekID))
			setIsLoading(false)
		})
	}

	useEffect(() => {
		// console.log('(useState) weekID = ', weekID)
		// const week = weekID ? weekID : pointToSlash(new Date())
		sequence(weekID).then(r => {
			// console.log('вызвался sequence')
		})
	}, [weekID])

	useEffect(() => {
		// console.log('weekData: ', weekData)

	}, [isLoading])

	const updateWeek = newWeekID => {
		// console.log('updateWeek')
		setWeekID(newWeekID)
	}

	if (isLoading)
		return (
			<div className='block'>
				<div className='title_container'>
					<h1>Расписание</h1>
				</div>
				<LoaderSchedule />
			</div>
		)

	return (
		<div className={`block`} style={{ overflow: 'visible' }}>
			{/* TITLE */}
			<div className='title_container'>
				<h1>Расписание</h1>
			</div>

			{/* SCHEDULE CONTROL BLOCK */}
			<ScheduleController
				weekID={weekID}
				updateWeek={updateWeek}
				calendar={user.calendar}
			/>

			{/* SCHEDULE WEEK BLOCK */}
			<ScheduleWeek weekData={weekData} />

			{/* end block */}
		</div>
	)
})

export default Schedule

import { CalendarBlank, CaretDown, GraduationCap, MagnifyingGlassMinus, MapPin, X, XCircle } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { epoch_getMinorUserData, epoch_schedule } from "../../http/epochServer";
import ScheduleController from "./ScheduleController";
import ScheduleWeek from "./ScheduleWeek";
import {parserDateNow, pointToSlash} from "../../managers/timeManager";
import { sch_parser } from "../../managers/schManager";
import LoaderSchedule from "../loaders/LoaderSchedule";

const Schedule = () => {

    const { user } = useContext(Context)
    const [weekData, setWeekData] = useState({})
    const [weekID, setWeekID] = useState(pointToSlash(new Date()))
    const [isLoading, setIsLoading] = useState(true)

    const id = user.userData.anotherID

    /* проверяет доп. данные, загружает календарь и лекции выбранной недели */
    const sequence = async () => {
        // нет доп. данных
        const isEmptyMinor = !Object.keys(user.minorUserData).length
        const isCalendar = !!Object.keys(user.calendar).length

        if (isEmptyMinor)
            await epoch_getMinorUserData(id)
                .then(r => user.setMinorUserData(r.data.data))

        console.log(user.minorUserData)
        const groupID = user.minorUserData.group.item2

        await epoch_schedule({ groupID, weekID, isCalendar })
            .then(r => {
                console.log(r)
                if (!isCalendar) user.setCalendar(r[1])
                setWeekData(sch_parser(r[0].rasp, weekID))
                setIsLoading(false)
            })
    }


    useEffect(() => {
        sequence(weekID).then(r => {
            console.log('конец sequence')
        })
    }, [weekID])

    useEffect(() => {
        console.log('weekData: ', weekData)
    }, [isLoading])

    const updateWeek = newWeekID =>
        setWeekID(newWeekID)


    if (isLoading)
        return <div className="block">
            <div className="title_container">
                <h1>Расписание</h1>
            </div>
            <LoaderSchedule />
        </div>

    return (
        <div className="block">
            {/* TITLE */}
            <div className="title_container">
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


            {/*<div className="content_cover">*/}
            {/*    <div className="content_elem_row">*/}
            {/*        <XCircle weight="bold" className="icon_min" />*/}
            {/*        <p>Расписание отсутствует</p>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/* end block */}
        </div>
    );
}

export default Schedule;
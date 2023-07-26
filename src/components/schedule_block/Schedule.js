import { CalendarBlank, CaretDown, GraduationCap, MagnifyingGlassMinus, MapPin, X, XCircle } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { epoch_getMinorUserData, epoch_schedule } from "../../http/epochServer";
import ScheduleController from "./ScheduleController";
import ScheduleWeek from "./ScheduleWeek";
import { parserDateNow } from "../../managers/timeManager";
import { sch_parser } from "../../managers/schManager";
import LoaderSchedule from "../loaders/LoaderSchedule";

const Schedule = () => {

    const { user } = useContext(Context)
    const [weekData, setWeekData] = useState({})
    const [weekID, setWeekID] = useState('2023-06-07')
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


            <div className="content_cover">
                <div className="content_elem_row">
                    <XCircle weight="bold" className="icon_min" />
                    <p>Расписание отсутствует</p>
                </div>
            </div>


            {/*<div className="element_container">*/}

            {/*  <div className="title_container">*/}
            {/*    <h3>Вторник</h3>*/}
            {/*    <h4 className="date">20.06.2023</h4>*/}
            {/*  </div>*/}

            {/*  <div className="content_cover">*/}
            {/*    <div className="content_elem_column">*/}
            {/*      <div className="container_row_start">*/}
            {/*        <div className="lighter lab">*/}
            {/*          <p className="text_lighter">9:30 – 11:00</p>*/}
            {/*        </div>*/}
            {/*        <div className="lesson_active"></div>*/}
            {/*      </div>*/}
            {/*      <h3>лаб Информационные системы и технологии</h3>*/}
            {/*      <div className="column_container_mini low_opacity">*/}
            {/*        <div className="container_row_start">*/}
            {/*          <GraduationCap weight="bold" className="icon_min" />*/}
            {/*          <p>проф.Ахметсафин Л.М.</p>*/}
            {/*        </div>*/}
            {/*        <div className="container_row_start">*/}
            {/*          <MapPin weight="bold" className="icon_min" />*/}
            {/*          <p>каб. 348</p>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}


            {/*<div className="element_container">*/}
            {/*  <div className="title_container">*/}
            {/*    <h3>Среда</h3>*/}
            {/*    <h4 className="date">21.06.2023</h4>*/}
            {/*  </div>*/}
            {/*  <div className="content_cover">*/}

            {/*    <div className="content_elem_column">*/}
            {/*      <div className="container_row_start">*/}
            {/*        <div className="lighter pract">*/}
            {/*          <p className="text_lighter">9:30 – 11:00</p>*/}
            {/*        </div>*/}
            {/*        <div className="lesson_active hidden"></div>*/}
            {/*      </div>*/}
            {/*      <h3>прак Информационные системы и технологии</h3>*/}
            {/*      <div className="column_container_mini low_opacity">*/}
            {/*        <div className="container_row_start">*/}
            {/*          <GraduationCap weight="bold" className="icon_min" />*/}
            {/*          <p>проф.Ахметсафин Л.М.</p>*/}
            {/*        </div>*/}
            {/*        <div className="container_row_start">*/}
            {/*          <MapPin weight="bold" className="icon_min" />*/}
            {/*          <p>каб. 348</p>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}

            {/*    <div className="breaker"></div>*/}

            {/*    <div className="content_elem_column">*/}
            {/*      <div className="container_row_start">*/}
            {/*        <div className="lighter lect">*/}
            {/*          <p className="text_lighter">11:15 – 13:00</p>*/}
            {/*        </div>*/}
            {/*        <div className="lesson_active hidden"></div>*/}
            {/*      </div>*/}
            {/*      <h3>лек Геолого-геофизические информационные комплексы</h3>*/}
            {/*      <div className="column_container_mini low_opacity">*/}
            {/*        <div className="container_row_start">*/}
            {/*          <GraduationCap weight="bold" className="icon_min" />*/}
            {/*          <p>зав Каф Оборнев Е.А.</p>*/}
            {/*        </div>*/}
            {/*        <div className="container_row_start">*/}
            {/*          <MapPin weight="bold" className="icon_min" />*/}
            {/*          <p>к.к</p>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}

            {/*    <div className="breaker"></div>*/}

            {/*    <div className="content_elem_column">*/}
            {/*      <div className="container_row_start">*/}
            {/*        <div className="lighter exam">*/}
            {/*          <p className="text_lighter">13:00 – 15:20</p>*/}
            {/*        </div>*/}
            {/*        <div className="lesson_active hidden"></div>*/}
            {/*      </div>*/}
            {/*      <h3>экз Геолого-геофизические информационные комплексы</h3>*/}
            {/*      <div className="column_container_mini low_opacity">*/}
            {/*        <div className="container_row_start">*/}
            {/*          <GraduationCap weight="bold" className="icon_min" />*/}
            {/*          <p>зав Каф Оборнев Е.А.</p>*/}
            {/*        </div>*/}
            {/*        <div className="container_row_start">*/}
            {/*          <MapPin weight="bold" className="icon_min" />*/}
            {/*          <p>к.к</p>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}

            {/*  </div>*/}
            {/*</div>*/}


            {/* end block */}
        </div>
    );
}

export default Schedule;
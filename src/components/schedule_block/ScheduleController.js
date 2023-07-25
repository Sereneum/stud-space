import React, {useEffect, useState} from 'react';
import {CalendarBlank, CaretDown} from "@phosphor-icons/react";
import {slashToPoint} from "../../managers/timeManager";
import ScheduleCalendar from "./ScheduleCalendar";

const ScheduleController = ({weekID, updateWeek, calendar}) => {

    const [isVisible, setIsVisible] = useState(false)
    const modalControl = () =>
        setIsVisible(prev => !prev)


    useEffect(() => console.log(isVisible), [isVisible])

    return (
        <>
            <div className="calendar_block select" onClick={modalControl}>
                <CalendarBlank weight="bold" className="icon_min"/>
                <h4 className="date">{slashToPoint(weekID)}</h4>
                <CaretDown weight="bold" className="icon_min"/>
            </div>

            <ScheduleCalendar
                isVisible={isVisible}
                setIsVisible={setIsVisible}
                weekID={weekID}
                updateWeek={updateWeek}
                calendar={calendar}
            />
        </>
    );
};

export default ScheduleController;
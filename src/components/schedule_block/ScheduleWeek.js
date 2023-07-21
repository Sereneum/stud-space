import React from 'react';
import {GraduationCap, MapPin} from "@phosphor-icons/react";
import ScheduleDay from "./ScheduleDay";

const ScheduleWeek = ({weekData}) => {

    return (
        <>
            {weekData.map(day => <ScheduleDay key={day.dayIndex} day={day}/>)}
        </>
    );
};

export default ScheduleWeek;
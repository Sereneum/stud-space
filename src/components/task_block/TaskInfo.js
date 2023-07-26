import React from 'react';
import {CalendarBlank, ChatCircle, Clock, GraduationCap} from "@phosphor-icons/react";
import {getStatusIcon} from "../../managers/statusManager";
import {formatDistance, formatDistanceToNow} from 'date-fns';

import moment from 'moment';
import 'moment/locale/ru';
import {timeManager} from "../../managers/timeManager"; // Подключаем русскую локаль

const TaskInfo = ({status, teacher, dateAdded, periodRealization, statusID, notation, isSuccess}) => {


    const normalizationDate = (dateStr) => {
        const date = new Date(dateStr);

        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`
    }

    const deadline = timeManager(periodRealization)

    return (
        <div className="element_container">

            <div className="title_container">
                <h3>Информация</h3>
            </div>

            <div className="content_cover">
                <div className="content_elem_column">
                    <div className="container_row_start">
                        <div className={`lighter ${getStatusIcon(statusID).color}`}>
                            {/*<PencilSimple weight="bold" className="icon_min text_lighter"/>*/}
                            {getStatusIcon(statusID).icon}
                            <p className="text_lighter">{status}</p>
                        </div>
                        {
                            deadline !== '0_0'
                            &&
                            <div className="lighter not_checked">
                                <Clock weight="bold" className="icon_min"/>
                                <p>{deadline}</p>
                            </div>
                        }

                    </div>

                    <div className="column_container_mini">
                        <div className="container_row_start extended_gap">
                            <GraduationCap weight="bold" className="icon_min"/>
                            <p>{teacher}</p>
                        </div>
                        <div className="container_row_start extended_gap">
                            <CalendarBlank weight="bold" className="icon_min"/>
                            <p>{`${normalizationDate(dateAdded)} – ${normalizationDate(periodRealization)}`}</p>
                        </div>
                    </div>
                </div>
            </div>
            {
                notation
                &&
                <div className="content_cover">
                    <div className="content_elem_row">
                        <ChatCircle weight="bold" className="icon_min"/>
                        <p>{notation}</p>
                    </div>
                </div>
            }

        </div>

    );
};

export default TaskInfo;
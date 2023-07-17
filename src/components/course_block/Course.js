import {Check, Clock, CaretRight, CaretLeft, PencilSimple, X, WarningCircle} from "@phosphor-icons/react";

import {NavLink, useNavigate} from "react-router-dom";
import Materials from "../materials/Materials";
import {useContext, useEffect, useState} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import CourseItem from "./CourseItem";


const Course = observer(() => {
    const {courseData} = useContext(Context)
    const [course, setCourse] = useState(null)
    const navigate = useNavigate()

    // подгрузОчка курса
    useEffect(() => {
        // пользователь изначально зашел на курс
        if (courseData.activeCourse === 0) {
            // есть запись о том, какой курс пользователь смотрел ранее
            if (localStorage.getItem('activeCourse')) {
                let local = Number(localStorage.getItem('activeCourse'))
                courseData.setActiveCourse(local)
                setCourse(courseData.courses.find(item => item.course_id === local))
            } else {
                // если нет записей о предыдущей сессии, то отправить на главную
                navigate('/')
            }
        }

        // ну тут просто юзер *тык*нул на курсик
        setCourse(courseData.courses.find(item => item.course_id === courseData.activeCourse))
    }, [courseData.activeCourse])

    // ждем-с
    if (course === null) return <div className="block"/>




    return (
        <div className="block">

            <div className="title_container desktop_only">
                <h1>{course.course_name}</h1>
            </div>

            <NavLink to={'/courses'} className="title_container back_container tablet">
                <CaretLeft weight="bold" className="icon_mid"/>
                <h2>Сейсморазведка</h2>
            </NavLink>

            <div className="element_container">
                <div className="title_container">
                    <h3>Задания</h3>
                </div>
                <div className="content_cover">
                    {
                        course.tasks.map((item, index) =>
                            <CourseItem
                                item={item}
                                key={item.courseTaskID}
                                isBreaker={index !== course.tasks.length - 1}
                            />)
                    }
                </div>
            </div>

            <Materials items={course.courseMaterials}/>
        </div>
    );
})

export default Course;
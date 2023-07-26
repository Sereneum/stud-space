import { CaretLeft, XCircle } from "@phosphor-icons/react";

import { useNavigate } from "react-router-dom";
import Materials from "../materials/Materials";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import CourseItem from "./CourseItem";


const Course = observer(() => {
    const { courseData } = useContext(Context)
    const [course, setCourse] = useState(null)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    const findCourseName = () => {
        let course_id = Number(localStorage.getItem('activeCourse'))
        if (!course_id) return ''
        for (let c of courseData.courses)
            if (course_id === c.course_id)
                return c.course_name
        return ''
    }

    // подгрузОчка курса
    useEffect(() => {
        // пользователь изначально зашел на курс
        if (courseData.activeCourse === 0) {
            // есть запись о том, какой курс пользователь смотрел ранее
            if (localStorage.getItem('activeCourse')) {
                let local = Number(localStorage.getItem('activeCourse'))
                courseData.setActiveCourse(local)
                setCourse(courseData.courses.find(item => item.course_id === local))
                setLoading(false)
            } else {
                // если нет записей о предыдущей сессии, то отправить на главную
                navigate('/')
            }
        }
        // ну тут просто юзер *тык*нул на курсик
        setCourse(courseData.courses.find(item => item.course_id === courseData.activeCourse))
    }, [courseData.activeCourse])

    const toCourses = () =>
        navigate('/courses')

    let pre_course_name = findCourseName()
    // ждем-с
    if (course === null) return <div className="block">
        <div className="title_container desktop_only">
            <h1>{pre_course_name}</h1>
        </div>

        <div onClick={toCourses} className="title_container back_container tablet">
            <CaretLeft weight="bold" className="icon_mid" />
            <h2>{pre_course_name}</h2>
        </div>

        <div className="element_container">
            <div className="title_container">
                <h3>Задания</h3>
                {'\n\n'}
            </div>
        </div>
    </div>

    return (
        <div className="block">

            <div className="title_container desktop_only">
                <h1>{course.course_name}</h1>
            </div>

            <div onClick={toCourses} className="title_container back_container tablet">
                <CaretLeft weight="bold" className="icon_mid" />
                <h2>{course.course_name}</h2>
            </div>

            <div className="element_container">
                <div className="title_container">
                    <h3>Задания</h3>
                </div>
                {
                    !course.tasks.length && <div className="content_cover">
                        <div className="content_elem_row">
                            <XCircle weight="bold" className="icon_min" />
                            <p>Нет доступных</p>
                        </div>
                    </div>
                }
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

            <Materials items={course.courseMaterials} />
        </div>
    );
})

export default Course;
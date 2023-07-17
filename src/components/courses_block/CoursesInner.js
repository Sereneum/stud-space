import {GearFine, CaretRight,} from "@phosphor-icons/react";

import {NavLink, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../../index";

const CoursesInner = () => {

    const {courseData} = useContext(Context)
    const navigate = useNavigate()

    const toCourse = (course_id) => {
        courseData.setActiveCourse(course_id)
        localStorage.setItem('activeCourse', course_id)
        navigate('/course')
    }

    const course = (name, course_id) => <div
        onClick={() => toCourse(course_id)}
        className="course_list_item select"
        key={course_id}
    >
        <h3>{name}</h3>
        <CaretRight weight="bold" className="icon_min"/>
    </div>

    return (
        <>
            <div className="title_container">
                <h1>Курсы</h1>
                <NavLink to="/settings" className="button_cover">
                    <GearFine weight="bold" className="icon_mid"/>
                </NavLink>
            </div>
            <div className="course_list_container">
                {
                    courseData.courses.map(item => course(item.course_name, item.course_id))
                }
            </div>

        </>
    );
}

export default CoursesInner;
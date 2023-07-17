import {CaretRight, Clock} from "@phosphor-icons/react";
import {NavLink, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {Context} from "../../index";
import {checkDeadline} from "../../managers/timeManager";
import DeadlineItem from "./DeadlineItem";

const DeadlineInner = () => {
    const {courseData} = useContext(Context)

    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // тута рабочий отбор, но нужно посортить и отбирать до ~5 + а, ну и статусы проверить :D
    // ищем
    // useEffect(() => {
    //     let list = []
    //     for (let tl of courseData.courses)
    //         for (let t of tl.tasks)
    //             if (checkDeadline(t.periodRealization))
    //                 list.push(t)
    //
    //     setTasks(list)
    //     setIsLoading(false)
    // }, [])

    useEffect(() => {
        let v = []
        v.push(courseData.courses[0].tasks[0])
        setTasks(v)
        setIsLoading(false)
        // console.log(v[0])
        return () => setIsLoading(true)
    }, [])




    // ждем-с
    if (isLoading) return <>
        <div className="title_container">
            <h1>Ближайшие дедлайны</h1>
        </div>
        <div className="deadline_row_container"/>
    </>

    return (
        <>
            <div className="title_container">
                <h1>Ближайшие дедлайны</h1>
            </div>

            <div className="deadline_row_container">
                {
                    tasks.map(item => <DeadlineItem item={item} key={'d' + item.courseTaskID}/>)
                }
            </div>
        </>
    );
}

export default DeadlineInner;
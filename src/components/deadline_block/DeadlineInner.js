import { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import DeadlineItem from "./DeadlineItem";
import { observer } from "mobx-react-lite";
import { Check } from "@phosphor-icons/react";
import { checkDeadline } from "../../managers/timeManager";
import { deadlinesManager } from "../../managers/deadlinesManager";

const DeadlineInner = observer(() => {
    const { courseData } = useContext(Context)

    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setTasks(deadlinesManager(courseData.courses))
        setIsLoading(false)
        return () => setIsLoading(true)
    }, [courseData.courses])


    // ждем-с
    if (isLoading) return <>
        <div className="title_container">
            <h1>Ближайшие дедлайны</h1>
        </div>
        <div className="deadline_row_container" />
    </>

    return (
        <>
            <div className="title_container">
                <h1>Ближайшие дедлайны</h1>
            </div>

            <div className="deadline_row_container">
                {
                    tasks.map(item => <DeadlineItem item={item} key={'d' + item.courseTaskID} />)
                }

                {
                    !tasks.length
                    &&
                    <div className="course_list_item">
                        <Check weight="bold" className="icon_min" />
                        <p>Нет доступных</p>
                    </div>
                }



            </div>
        </>
    );
})

export default DeadlineInner;
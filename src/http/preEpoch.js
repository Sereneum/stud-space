import {$authHost} from "./index";
import {API_DETAIL_TASK} from "./consts";

const preEpoch_deadlineParser = deadline => {
    let hours = (Date.parse(deadline) - Date.now()) / (1000 * 60 * 60) + 24
    return hours > 0 ? Math.round(hours) : 0
}

export const preEpoch_mergeCourseData = (user_data, duty_data, course_id, course_name = '') => {
    return new Promise((resolve, reject) => {
        const courseMaterials = duty_data.listFiles
        const courseThemes = duty_data.listCourseThemes
        const preTasks = user_data.listSelectedTasks
        const listStatus = ["Просрочено", "В проверке", "На доработке", "Выполнено", "Не отправлено"]



        // подгрузка детальной информации о каждом задании в курсе
        const tasks = []
        for(let i = 0; i < preTasks.length; ++i){
            let task_status = preTasks[i].taskExpired.statusID === null ? 0 : preTasks[i].taskExpired.statusID
            tasks.push({
                courseID: preTasks[i].courseID,
                courseTaskID: preTasks[i].courseTaskID,
                courseName: course_name,
                dateAdded: preTasks[i].dateAdded,
                taskFile: preTasks[i].file,
                nameTask: preTasks[i].nameTask,
                numberTask: preTasks[i].numberTask,
                periodRealization: preTasks[i].periodRealization,
                deadline: preEpoch_deadlineParser(preTasks[i].periodRealization),
                userFIO: preTasks[i].userFIO,
                statusID: task_status,
                statusName: task_status === 0 ? 'Не отправлено' : listStatus[task_status - 1]
            })
        }

        // окончательная информация о курсе
        resolve({
            course_id,
            course_name,
            courseMaterials,
            courseThemes,
            tasks
        })
    })
}

/* детальная информация о задаче */
export const preEpoch_getDetailTaskData = (task_id) => new Promise((resolve, reject) => {
    $authHost(API_DETAIL_TASK + task_id).then(d => resolve(d.data.data.listCourseTaskStudent[0]))
})

/* информация о задаче из курса */
export const preEpoch_getCurrentTaskData = (task_id, courses) => {
    for(let item of courses)
        for(let task of item.tasks)
            if(task.courseTaskID === task_id)
                return task
}


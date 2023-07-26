import {checkDeadline} from "./timeManager";

// смешиваем
const mixer = courses => {
    const tasks = []
    for(let i of courses)
        for(let j of i.tasks)
            tasks.push(j)
    return tasks
}
// отбираем по времени
const selectionByTime = t => {
    const r = []
    for(let i of t)
        if(checkDeadline(i.periodRealization) > 0)
            r.push(i)
    return r
}
// отбираем по статусу
const selectionByStatus = t => {
    let r = []
    // status = 2 -> в проверке, status = 0 -> не отправлено
    for(let i of t)
        if(i.statusID === 0 || i.statusID === 2)
            r.push(i)
    return r
}

// сортируем и обрезаем
const conv = t =>
    t
        .sort((a, b) => b.periodRealization - a.periodRealization)
        .slice(-3)
        .sort((a, b) => a.periodRealization - b.periodRealization)

export const deadlinesManager = courses =>
    conv(selectionByStatus(selectionByTime(mixer(courses))))
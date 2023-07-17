import moment from 'moment';
// import {ru} from 'date-fns/locale'; // Подключаем русскую локаль

const convResult = (result) => {
    switch (result) {
        case 'час':
            return '1 час'
        case 'день':
            return '1 день'
        default:
            return result
    }
}
// принимает дату, и возращает время дедлайна
export const timeManager = (dead) => {
    const end = moment(dead).add(1, 'day')
    const today = moment()
    const daysDiff = end.diff(today, 'day')
    const hoursDiff = end.diff(today, 'hour') + 1

    // 1 случай - конец
    if (daysDiff <= 0 && hoursDiff <= 0)
        return 'уфсе'

    // 2 случай - ласт день
    if (daysDiff === 0 && hoursDiff > 0)
        return convResult(moment.duration(hoursDiff, 'hours').humanize())

    if (daysDiff > 0)
        return convResult(moment.duration(daysDiff, 'days').humanize())

    return 'ошибка'
}

export const checkDeadline = (time) =>
    moment(time).add(1, 'day').diff(moment(), 'hour')
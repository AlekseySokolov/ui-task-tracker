export const importanceClass = (importance) => {
    return importance === 'low' ?'low' : importance === 'high' ? 'high' : null
}
export const statusClass = (status) => {
    return status === 'done' ?'done' : status ==='performed'? 'performed' : null
}

export const liClassDoneOrTask = (quest) => {
    return quest.status === 'done' ? 'taskDone' : 'task'
}
export function addTaskAction(taskName){
    return {
        type:"ADD_TASK_LIST",
        taskName:taskName
    }
}

export function removeTaskAction(taskName){
    return {
        type:"REMOVE_TASK_LIST",
        taskName:taskName
    }
}
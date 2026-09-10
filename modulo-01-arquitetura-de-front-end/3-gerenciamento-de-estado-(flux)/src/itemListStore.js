import { register } from "./dispatcher";

const taskList = [];
const listeners = [];

export function getTaskList(){
    return taskList;
}

export function addTaskListListener(listen){
    listeners.push(listen)
}

export function emitChange(){
    listeners.forEach(listener => listener());
}

register(
    function(action){
    switch(action.type){
        case "ADD_TASK_LIST":
            taskList.push(action.taskName)
            emitChange();
            break;
    }
});
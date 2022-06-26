import {ADD_task} from "./Types"
import {REMOVE_task} from "./Types"
import {CHANGE_task } from "./Types"
import {EDIT_task} from "./Types"
import { v4 as uuidv4 } from 'uuid';
export const addTask=(newTask)=>{
    return{
    type: ADD_task,
    payload :{ ...newTask,id:uuidv4(),complete:false}
    }
}
export const REMOVE_Task=(id)=>{
    return{
    type: REMOVE_task,
    payload : id
    }
}
export const changeTask=(id)=>{
    return{
    type: CHANGE_task,
    payload : id
    }
}
export const EDIT_Task=(id,text)=>{
    return{
    type: EDIT_task,
    payload : {id,text}
    }
}
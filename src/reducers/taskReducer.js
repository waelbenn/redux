
import { ADD_task } from '../Actions/Types';
import { REMOVE_task } from '../Actions/Types';
import { CHANGE_task } from '../Actions/Types';
import { EDIT_task } from '../Actions/Types';

const task=[
    {
    id:"1",
    text:"first to do ",
    complete:false,
    
   }
]
const TasksReducer = ( state =task , action) => {
    switch(action.type){
        case(ADD_task) : 
        return state.concat(action.payload);



        case(REMOVE_task) : 
        return state.filter(el => el.id !== action.payload);



        case(CHANGE_task) :
        return state.map(el=> el.id== action.payload?{...el, complete:!el.complete} :el );



        case(EDIT_task) :
        return state.map(el=> el.id== action.payload.id?{...el, edit:!el.edit , text : action.payload.text} :el )


       


        default : return state ;
    }
}
export default TasksReducer;
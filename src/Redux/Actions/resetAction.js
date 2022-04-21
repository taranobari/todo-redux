import {RESET_TODO} from "./types"
const resetTodo=(value,array)=>dispatch=>{
    // array.splice(array.length,0);
    // array.length=0
    array=[]
    console.log('array',array);
    dispatch({
        type: RESET_TODO,
        payload: {
         array:array
        }
    })
}
export default resetTodo
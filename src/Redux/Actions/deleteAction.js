import { DELETE_TODO } from "./types"
const deleteTodo=(value,array)=>dispatch=>{
   array.splice(value, 1);
   console.log('newArray',array);
    dispatch({
        type: DELETE_TODO,
        payload: {
            newArray: array
        }
    })
}
export default deleteTodo

import { ADD_TODO } from "./types"
const addTodo=(value)=>dispatch=>{
    dispatch({
        type: ADD_TODO,
        payload: {
          value: value
        }
    })
}
export default addTodo
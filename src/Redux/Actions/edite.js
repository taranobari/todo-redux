import { EDITE_TODO } from "./types"
const editeTodo=(value,array)=>dispatch=>{
  let  x = window.prompt()
  array[value]=x
console.log('array',array);
   console.log('edit action is happening');
    dispatch({
        type: EDITE_TODO,
        payload: {
          array:array
        }
    })
}
export default editeTodo
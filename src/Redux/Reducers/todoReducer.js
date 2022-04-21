import { ADD_TODO } from "../Actions/types";
import { DELETE_TODO } from "../Actions/types";
import { EDITE_TODO} from "../Actions/types";
const initialState={
    data: [],
}

const todoReducer=(state=initialState,action)=>{
    switch(action.type) {
        case ADD_TODO :
          return {
              data: [
               ...state.data, action.payload.value
              ]
          }
      case DELETE_TODO:
          return {
            data: [
                ...action.payload.newArray
               ]
           }

           case EDITE_TODO:
               console.log('reducer is happening',action);
            return {
              data: [
                  ...action.payload.array
                 ]
             }
          
  
        default:
            return state
      }
}

export default todoReducer 

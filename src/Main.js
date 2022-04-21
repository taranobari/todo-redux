import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import addTodo from "./Redux/Actions/addAction";
import deleteTodo from "./Redux/Actions/deleteAction";
import editeTodo from "./Redux/Actions/edite";


const Main=()=>{
const s = useSelector(state=>state)
const dispatch=useDispatch()


    // const [names,setNames]=useState([])
    const [value,setValue]=useState('')
    
    const handleClick=()=>{
        dispatch(addTodo(value))
        // setNames([...names,value])
        console.log('s',s);
    }   

   
    return(
        <div>
            <input type='text' value={value} onChange={(e)=>{setValue(e.target.value)}}/>
            <button className='btn' onClick={()=>handleClick()} >add todo</button>
            
            <Card names={s.todo.data} />
        </div>
    )
}


const Card=({names,value})=>{
    const s = useSelector(state=>state)
    const dispatch=useDispatch()

    const deleteItem=(i)=>{
        dispatch(deleteTodo(i,names))
        // setNames([...names,value])
        console.log('sDelet',s);
    }   
    const editItem=(i)=>{
        console.log('editeItem is happening');
        dispatch(editeTodo(i,names))
        // setNames([...names,value])
    }   

    
    return(
        <div>
             {names.map((user,i) => {
                return <div key={i}>{user}
                <button className='btn' onClick={()=>deleteItem(i)} >delete</button>
                <button className='btn' onClick={()=>editItem(i)} >edite</button>
                </div>
             })}

        </div>
    )
}

export default Main
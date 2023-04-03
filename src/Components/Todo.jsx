import React, { useState } from 'react'
import './todo.css'
import TodoItem from './TodoItem'
const Todo = () => {
    const[data,setData]=useState("");
    const[todo,addToDo]=useState([]);
    var newItem={
        title:data,
        toggle:false
    }

    const deleteItem=(index)=>{
       var newData=todo.filter((ele,i)=>{
            return index !== i
        })
        
        addToDo(newData)
        
    }

    const handleToggle=(index)=>{
       var newArray=todo.map((ele,i)=>{
        return index === i ? {...ele ,toggle: !ele.toggle} : ele;
       })
       addToDo(newArray)
    }
    
  return (
    <div style={{
        textAlign:"center",
        padding:"25px"
    }}>
        <h2 className='text'>ToDo Example</h2>
        <input type='text' value={data} placeholder='Enter the text' className='inp' onChange={(e)=>{
            setData(e.target.value)
        }} />
        <button className='but' onClick={()=>{
            addToDo([...todo,newItem])
        }}> Add Item</button> 
        <TodoItem setData={todo} handleToggle={handleToggle} deleteItem={deleteItem} />
    </div>
  )
}

export default Todo
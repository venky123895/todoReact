import React from 'react'

const TodoItem = ({setData,handleToggle,deleteItem}) => {

  return (
    <div>
       {
        
        setData.map((ele,index)=>{
            return (
                <div style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    marginTop:"25px",
                    gap:"20px"
                }}>
                <h4>{ele.title}</h4>
                <h5 style={{color:"red"}}>{ele.toggle ? "Completed" : "Pending"}</h5>
                <button onClick={()=>{
                    handleToggle(index)
                }}>Toggle</button> 
                <button onClick={()=>{
                  deleteItem(index);
                }}>Delete</button>
                </div>
            )
        })
       }
    </div>
  )
}

export default TodoItem
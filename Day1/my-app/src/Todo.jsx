import React, { useState } from 'react'


const Todo = () => {
    const [tasks,setTask] = useState(["Eat BreakFast","Take Meal","Sleep"]);
    const [newtask,setNewTask] = useState("");
    function inputChange(e){
setNewTask(e.target.value);
    }
    function addTask(){
        if(newtask.trim() !== ""){

setTask(t=>[...t,newtask]);
setNewTask("");
        }
    }
    function deleteTask(i){
        const updatedTasks = tasks.filter((_,index)=>index !== i);
        setTask(updatedTasks);

    }
    function moveTaskUP(i){

        if(i>0){
            const updatedTasks = [...tasks];
            [updatedTasks[i],updatedTasks[i-1]]= [updatedTasks[i-1],updatedTasks[i]];
            setTask(updatedTasks);
        }
    }
    function moveTaskdown(i){
        if(i<tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[i],updatedTasks[i+1]]= [updatedTasks[i+1],updatedTasks[i]];
            setTask(updatedTasks);
        }
       

    }


  return (
    <div className='Todo'>
      
<h1 className='MianHe'>ToDo-List</h1>
<div>
    <input type="text" name="" id="" placeholder='Enter a Task' className='form' value={newtask}  onChange={inputChange}/>
    <button className='add-btn'onClick={addTask}>Add</button>
</div>
<ol>
    {tasks.map((task,index)=>
    <li key={index}>


        <span className='text'>{task}</span>
        <div className='overall'>
        <button className='delete-btn' onClick={()=> deleteTask(index)}>Delete</button>
        <button className='move-btn' onClick={()=> moveTaskUP(index)}>&#8593;</button>
        <button className='movedown-btn' onClick={()=> moveTaskdown(index)}>&#8595;</button>
        </div>
    </li>
    )}
</ol> 

    </div>
  )
}

export default Todo

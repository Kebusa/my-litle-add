import { useState, useEffect } from "react";
import "../12.03.25/Task.css"

function Effect() {
    const [task, setTask] = useState()
    const [tasks, setTasks] = useState([
        {taskName: "Uy jumysy", completed: true}
    ])



    useEffect(() => {
        const newTask = prompt('write task')
        localStorage.setItem("taskName", newTask)   

    }, [task])
    useEffect(() =>{
        setTasks(...tasks, {taskName:localStorage.getItem("taskName"), completed:false})
        
    },[])


    function handleChange(id) {
        setTasks(tasks.map((task,index) =>  
        index  == id ? {taskName: task.taskName, completed: !task.completed} : {...task}
        ))
    }
    function handleRemove(id) {
        setTasks(tasks.filter((task, index) => index!==id))
    }
   
    return(
        <div>
            <h1>UseEffect tasks</h1>
            <ul>
            {tasks.map((tapsyrma, index) => {
                    return <li key={index} >
                        <div>{tapsyrma.taskName}</div>
                            <div className="btn-box">
                                {tapsyrma.completed ? <button onClick={() => handleChange(index)}>⭕</button> : <button onClick={() => handleChange(index)}>❌</button>}
                                {<button onClick={() => handleRemove(index)}>🗑️</button>}
                            </div>
                        </li>
                })}
            </ul>
        </div>

    )
}
export default Effect;
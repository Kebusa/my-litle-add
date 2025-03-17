import { useState } from "react";
import "../12.03.25/Task.css"

function FilterTask() {
    const [task, setTask] = useState()
    const [tasks, setTasks] = useState([
        {taskName: "Гүл суару", completed:true},
        {taskName: "күнделікті үй тапсырмасың орындау", completed:false},
    ])

    const [filter, setFilter] = useState('all')

    function setFilter() {
        tasks.filter((task, index) =>{
             if(filter == 'complete'){
                return task.completed
             }
             if(filter == 'uncomplete'){
                return !task.completed
            }else{
                return true
            }
        })
    }
    function handleSubmit(e) {
        e.preventDefault()

        setTasks([...tasks, {taskName: task, completed: false}])
        setTask('')
    }
    function handleChange(id) {
        setTasks(tasks.map((task,index) =>  
        index  == id ? {taskName: task.taskName, completed: !task.completed} : {...task}
        ))
    }
    function handleRemove(id) {
        setTasks(tasks.filter((task, index) => index!=id))
    }
    return(
        <div className="vse">
            <form onSubmit={handleSubmit}>
                <input value={task} type="text" onChange={(e) => setTask(e.target.value)} />
                <button type="submit">Add</button>
            </form>
            <nav>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('complete')}>Completed</button>
                <button onClick={() => setFilter('uncomplete')}>Uncompleted</button>
            </nav>
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
export default FilterTask;
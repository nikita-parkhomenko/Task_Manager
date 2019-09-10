import React from 'react'

import './Tasks.css'

const Tasks = (props) => {
    const tasksList = props.tasks.map( task => {
        return <li key={task.id} className="task-item"> {task.task} </li>
    })


    return(
        <ul className="Tasks">
            {tasksList}
        </ul>
    )
}

export default Tasks
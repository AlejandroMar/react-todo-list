import React from 'react';
import Task from './Task';

const TaskListBody = (props) => {

        return (
            <ul className="collection">
                {props.tasks.map((task, index) => {
                    return (
                        <Task task={task.task} 
                        key={task.id} 
                        taskIndex={index} 
                        eraseTask={props.eraseTask}/>
                    )       
                })}
            </ul>
        )
    
}

export default TaskListBody;
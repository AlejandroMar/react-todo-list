import React from 'react';
import Task from './Task';

const TaskListBody = (props) => {

        return (
            <ul className="collection">
                {props.tasks.map((task, index) => {
                    return (
                        <Task task={task} 
                        key={task.id || task._id} 
                        taskIndex={index} 
                        eraseTask={props.eraseTask}
                        taskDone={props.taskDone}
                        editTask={props.editTask}/>
                    )       
                })}
            </ul>
        )
    
}

export default TaskListBody;
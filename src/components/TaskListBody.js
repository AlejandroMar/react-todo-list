import React from 'react';
import Task from './Task';

const TaskListBody = (props) => {

        return (
            <ul>
                {props.tasks.map(task => <Task task={task.task}/>)}
            </ul>
        )
    
}

export default TaskListBody;
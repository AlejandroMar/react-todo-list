import React from 'react';
import Task from './Task';

const TaskListBody = (props) => {

        return (
            <ul className="collection">
                {props.tasks.map(task => <Task task={task.task}/>)}
            </ul>
        )
    
}

export default TaskListBody;
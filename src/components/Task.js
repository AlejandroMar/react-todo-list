import React from 'react';


const Task = (props) => {

    const clickToErase = () => {
        const taskIndex = props.taskIndex;
        props.eraseTask(taskIndex);
    }

    const clickDone = () => {
        const taskIndex = props.taskIndex;
        props.taskDone(taskIndex);
    }

    const clickToEdit = () => {
        const taskIndex = props.taskIndex;
        props.editTask(taskIndex);
    }
        return (
           <li className={`collection-item ${props.task.done ? 'line-through' : ''}`}>{props.task.task}
                <a 
                className="waves-effect waves-light btn secondary-content">
                    <i onClick={clickDone} className="large material-icons">done</i>
                </a>
                <a
                className="waves-effect waves-light btn secondary-content">
                    <i onClick={clickToErase} className="large material-icons">close</i>
                </a>
                <a
                className="waves-effect waves-light btn secondary-content">
                    <i onClick={clickToEdit} className="large material-icons">brush</i>
                </a>
            </li>
        )
}

export default Task;
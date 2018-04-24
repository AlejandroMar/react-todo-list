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
                <a onClick={clickDone}
                className={`waves-effect waves-light btn secondary-content ${props.task.done ? 'amber darken-2' : '' }`}>
                    <i  className="large material-icons">done</i>
                </a>
                <a onClick={clickToErase}
                className="waves-effect waves-light btn secondary-content">
                    <i  className="large material-icons">close</i>
                </a>
                <a onClick={clickToEdit}
                className="waves-effect waves-light btn secondary-content">
                    <i  className="large material-icons">brush</i>
                </a>
            </li>
        )
}

export default Task;
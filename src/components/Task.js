import React from 'react';


const Task = (props) => {

    const handleClick = () => {
        const taskIndex = props.taskIndex;
        props.eraseTask(taskIndex);
    }
        return (
           <li className="collection-item">{props.task}
                <a 
                className="waves-effect waves-light btn secondary-content">
                    <i className="large material-icons">done</i>
                </a>
                <a
                className="waves-effect waves-light btn secondary-content">
                    <i onClick={handleClick} className="large material-icons">close</i>
                </a>
            </li>
        )
}

export default Task;
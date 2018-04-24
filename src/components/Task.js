import React from 'react';


const Task = (props) => {
        return (
           <li className="collection-item">{props.task}
                <a 
                class="waves-effect waves-light btn secondary-content">
                    <i class="large material-icons">done</i>
                </a>
                <a 
                class="waves-effect waves-light btn secondary-content">
                    <i class="large material-icons">close</i>
                </a>
            </li>
        )
}

export default Task;
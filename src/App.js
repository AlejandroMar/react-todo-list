import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import TaskListBody from './components/TaskListBody'


class App extends Component {
    state = {
        presentTask: '',
        tasksList: []
    }

    addTask = task => {
        this.setState({ presentTask: task.target.value })
    }

    pushTask = () => {
        const newTask = {
            task: this.state.presentTask,
            id: Date.now()
        }
        const tasksList = [...this.state.tasksList];
        tasksList.push(newTask);
        this.setState({ tasksList: tasksList, presentTask: '' });
    }

    render() {
        return (
            <div>
                <h2>Todos</h2>
                <SearchBar addTask={this.addTask} pushTask={this.pushTask} presentTask={this.state.presentTask} />
                <TaskListBody tasks={this.state.tasksList}/>
            </div>
        );
    }
}

export default App;

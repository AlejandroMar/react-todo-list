import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import './App.css';
import TaskListBody from './components/TaskListBody';




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
            done: false,
            id: Date.now()
        }
        const tasksList = [...this.state.tasksList];
        tasksList.push(newTask);
        this.setState({ tasksList: tasksList, presentTask: '' });
    }

    eraseTask = (index) => {
        const tasksList = [...this.state.tasksList];
        tasksList.splice(index, 1);
        this.setState({ tasksList })
    }

    taskDone = (index) => {
        const tasksList = [...this.state.tasksList];
        tasksList[index].done = true;
        this.setState({ tasksList })  
    }

    editTask = (index) => {
        console.log('editing');
        
    }

    render() {
        return (
            <div className="container">
                <h2>Todos</h2>
                <SearchBar addTask={this.addTask} pushTask={this.pushTask} presentTask={this.state.presentTask} />
                <TaskListBody 
                    tasks={this.state.tasksList} 
                    eraseTask={this.eraseTask} 
                    taskDone={this.taskDone}
                    editTask={this.editTask}/>
            </div>
        );
    }
}

export default App;

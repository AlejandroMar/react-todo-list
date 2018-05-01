import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import './App.css';
import TaskListBody from './components/TaskListBody';




class App extends Component {
    state = {
        presentTask: '',
        tasksList: []
    }

    componentDidMount() {
        fetch('http://localhost:5000/todos')
            .then(result => result.json())
            .then(todos => this.setState({ tasksList: todos }))
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
        if (newTask.task) {
            tasksList.push(newTask);
            this.setState({ tasksList: tasksList, presentTask: '' });
            const task = newTask;

            fetch('http://localhost:5000/todos', {
                method: 'POST',
                headers: {
                    //very important to give the headers
                    'user-agent': 'Mozilla/4.0 MDN Example',
                    'content-type': 'application/json'
                },
                body: JSON.stringify(task)
            });
        }

    }

    eraseTask = (index) => {
        const tasksList = [...this.state.tasksList];
        tasksList.splice(index, 1);
        this.setState({ tasksList })
    }

    taskDone = (index) => {
        const tasksList = [...this.state.tasksList];
        tasksList[index].done = !tasksList[index].done;
        this.setState({ tasksList })
    }

    editTask = (index) => {
        const tasksList = [...this.state.tasksList];
        const presentTask = tasksList[index].task;
        tasksList.splice(index, 1);
        this.setState({ tasksList, presentTask })
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
                    editTask={this.editTask} />
            </div>
        );
    }
}

export default App;

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

            fetch('http://localhost:5000/todos', {
                method: 'POST',
                headers: {
                    //very important to give the headers
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newTask)
            });
        }

    }




    eraseTask = (index) => {
        const tasksList = [...this.state.tasksList];

        fetch(`http://localhost:5000/todos/${tasksList[index].id}`, {
            method: 'DELETE',
            headers: {
                //very important to give the headers
                'content-type': 'application/json'
            }
        })
            .then((result) => {
                tasksList.splice(index, 1);
                this.setState({ tasksList })
            })
    }

    taskDone = (index) => {
        const tasksList = [...this.state.tasksList];
        tasksList[index].done = !tasksList[index].done;
        this.setState({ tasksList });

        fetch(`http://localhost:5000/todos/${tasksList[index].id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            //method is case sensitive
            method: 'PATCH',
            body: JSON.stringify([{ propName: 'done', value: tasksList[index].done }])
        });

    }

    editTask = (index) => {
        const tasksList = [...this.state.tasksList];
        const presentTask = tasksList[index].task;

        fetch(`http://localhost:5000/todos/${tasksList[index].id}`, {
            method: 'DELETE',
            headers: {
                //very important to give the headers
                'content-type': 'application/json'
            }
        }).then(() => {
            tasksList.splice(index, 1);
            this.setState({ tasksList, presentTask })
        })
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

import React, { Component } from 'react';
import SearchBar from './components/SearchBar'


class App extends Component {
  state = {
    presentTask: '',
    tasksList: []
  }

  addTaskToState = task => {
    this.setState({presentTask: task.target.value })
  }

  pushTaksToTaskArray = () => {
    const tasksList = [...this.state.tasksList];
    tasksList.push(this.state.presentTask);
    this.setState( { tasksList: tasksList, presentTask: '' });
    


  } 
   
  render() {
    return (
      <div>
       <h2>Todos</h2>
       <SearchBar addTaskToState={this.addTaskToState} pushTaksToTaskArray={this.pushTaksToTaskArray}  />
      </div>
    );
  }
}

export default App;

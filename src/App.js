import React, { Component } from 'react';
import TaskList from './TaskList';
import './App.css';

const masterTaskList = [
  {
    description: 'get some shoes',
    important: false,
    id: 0
  }, {
    description: 'buy some food',
    important: false,
    id: 1
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTaskList
    }
    this.toggleImportant = this.toggleImportant.bind(this);
  }

  toggleImportant(key) {

    // ONE MORE THING I FORGOT... THIS ALSO CREATES A DEEP COPY AND IS WAY WAY FASTER...

    let newTaskList = JSON.parse(JSON.stringify(this.state.masterTaskList));
    newTaskList[key].important = !newTaskList[key].important;
    this.setState({
      masterTaskList: newTaskList
    }, () => {
      console.log(this.state.masterTaskList);
    })

    // FEEL FREE TO USE THE ABOVE SYNTAX INSTEAD OF THE LONG VERSION BELOW! JUST MAKE SURE YOU KNOW HOW THE CODE BELOW WORKS!

    let newList = this.state.masterTaskList.slice();
    let newTask = Object.assign({}, newList[key]);
    let newValue = !newTask.important;
    newTask.important = newValue;
    newList[key] = newTask;

    this.setState({
      masterTaskList: newList
    }, () => {
      console.log(this.state.masterTaskList);
    });
  }

  render() {
    return (
      <div className="App">
        <p onClick={this.toggleImportant}>click me</p>
        <TaskList
          taskList={this.state.masterTaskList}
          toggleImportant={this.toggleImportant}/>
      </div>
    );
  }
}

export default App;

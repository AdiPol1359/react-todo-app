import React, { Component, Fragment } from 'react';
import TodoTasks from '../TodoTasks/TodoTasks';
import CompletedTasks from '../CompletedTasks/CompletedTasks';
import AddTask from '../AddTask/AddTask';

class App extends Component {

  state = {

    tasks: {

      todo: [
        { id: 0, name: 'umyć samochód', time: '2020-04-24', important: true },
        { id: 1, name: 'umyć zęby', time: '2020-04-24', important: false }
      ],

      completed: []
    }
  }


  /*
  tasks: {

      todo: [
        { id: 0, name: 'umyć samochód', time: '2020-04-24', important: true },
        { id: 1, name: 'umyć zęby', time: '2020-04-24', important: false }
      ],

      completed: [
        { id: 0, name: 'Umyć samochód', time: '2020-11-12', completedDate: '24.01.2019', completedTime: '10:48:59' },
        { id: 1, name: 'Zrobić dobry uczynek', time: '2020-11-12', completedDate: '24.01.2019', completedTime: '10:48:59' },
      ]

    }
  */

  
  handleAddTaskButtonClick = ({ name, date, important }) => {
    const todo = [...this.state.tasks.todo];

    todo.push({ id: todo.length, name, time: date, important });
    this.setState(prevState => ({
      tasks: {
        todo,
        completed: prevState.tasks.completed
      }
    }))
  }

  handleTodoTaskRemoveButtonClick = id => {
    const todo = [...this.state.tasks.todo];
    const item = todo.find(task => task.id === id);
    const index = todo.indexOf(item);

    todo.splice(index, 1);

    this.setState(prevState => ({
      tasks: {
        todo,
        completed: prevState.tasks.completed
      }
    }))
  }

  handleTodoTaskCompleteButtonClick = id => {
    const todo = [...this.state.tasks.todo];
    const item = todo.find(task => task.id === id);
    const index = todo.indexOf(item);

    const completed = [...this.state.tasks.completed];

    const date = new Date();
    

    const completedDate = `${date.getDay() > 9 ? date.getDay() : `0${date.getDay()}`}.${date.getMonth() > 9 ? date.getMonth() : `0${date.getMonth()}`}.${date.getFullYear()}`
    const completedTime = `${date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`}:${date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`}:${date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`}`;


    todo.splice(index, 1);
    completed.push({
      id: completed.length,
      name: item.name,
      time: item.time,
      completedDate,
      completedTime
    });

    this.setState({
      tasks: {
        todo,
        completed
      }
    })
  }

  handleCompletedTaskButtonClick = id => {
    const completed = [...this.state.tasks.completed];
    const item = completed.find(task => task.id === id);
    const index = completed.indexOf(item);

    completed.splice(index, 1);

    this.setState(prevState => ({
      tasks: {
        todo: prevState.tasks.todo,
        completed
      }
    }))
  }

  render() {
    return(
      <Fragment>
        <AddTask click={this.handleAddTaskButtonClick} />
        <TodoTasks completeClick={this.handleTodoTaskCompleteButtonClick} deleteClick={this.handleTodoTaskRemoveButtonClick} tasks={this.state.tasks.todo}/>
        <CompletedTasks tasks={this.state.tasks.completed} click={this.handleCompletedTaskButtonClick}/>
      </Fragment>
    )
  }
}

export default App;

import React from 'react';
import '../CSS/PostATask.css';

class PostATask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "Enter task name in-short",
      taskType: "Cleaning",
      taskDescription: "Please describe your task specifically!"
    }
  }

  handleSubmitClick = (event) => {
    event.preventDefault();
    alert('Your task: ' + this.state.taskName + 'had been posted!')
  }

  handleResetClick = (event) => {
    this.setState({
      taskName: "Enter task name in-short",
      taskType: "Cleaning",
      taskDescription: "Please describe your task specifically!"
    })
    alert('Reset Successful!');
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value
    this.setState({
      [name]: value,
    })
  }

  render() {
    return(
      <div className="container">
        <div className="cardName">Post My Task</div>
        <form className="postTask__form" onSubmit={this.handleSubmitClick}>
          <label>
            <div className="taskName__wrapper">
              <span className="taskName">Task Name:</span>
              <input className="taskNameInput" name="taskName" type="text" value={this.state.taskName} onChange={this.handleInputChange} />
            </div>
            <select className="taskType" name="taskType" value={this.state.taskType} onChange={this.handleInputChange}>
              <option value="Cleaning">Cleaning</option>
              <option value="preserveSpace1">preserve1</option>
              <option value="preserveSpace2">preserve2</option>
              <option value="preserveSpace3">preserve3</option>
            </select>
            <textarea className="taskDescription" name="taskDescription" value={this.state.taskDescription} onChange={this.handleInputChange} />
          </label>
          <input className="reset" type="reset" onClick={this.handleResetClick} value="Reset" />
          <input className="taskSubmit" type="submit" value="Post My Task" />
        </form>
      </div>
    )
  }
}




export default PostATask;
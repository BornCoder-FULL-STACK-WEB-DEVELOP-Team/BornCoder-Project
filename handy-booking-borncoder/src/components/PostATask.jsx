import React from 'react';
import styles from '../CSS/PostATask.module.css';

class PostATask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "Enter task name in-short",
      taskType: "Personal",
      taskDescription: "Please describe your task specifically!",
      taskPrice: "",
    }
  }

  handleSubmitClick = (event) => {
    event.preventDefault();
    let taskName = this.state.taskName;
    let taskType = this.state.taskType;
    let taskDescription = this.state.taskDescription;
    let taskPrice = this.state.taskPrice;
    let fetchOption = {
      method: 'POST',
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json', },
      body: {
        '"taskName"': taskName,
        '"typeName"': taskType,
        '"description"': taskDescription,
        '"budget"': taskPrice,
      }
    }


    console.log(fetchOption);
    let url = 'http://localhost:8080/hello';
    //后端接口url；
    fetch(url, fetchOption)
    .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        // 打印返还3位代码 401 404 or 200;
      })
    alert('Your task: ' + this.state.taskName + 'had been posted!')
  }

  // handleResetClick = (event) => {
  //   this.setState({
  //     taskName: "Enter task name in-short",
  //     taskType: "Cleaning",
  //     taskDescription: "Please describe your task specifically!"
  //   })
  //   alert('Reset Successful!');
  // }

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
      <div className={styles.container}>
        <div className={styles.cardName}>Post My Task</div>
        <form className={styles.postTask__form} onSubmit={this.handleSubmitClick}>
          <label>
            <div className={styles.taskName__wrapper}>
              <span className={styles.taskName}>Task Name:</span>
              <input className={styles.taskNameInput} name="taskName" type="text" value={this.state.taskName} onChange={this.handleInputChange} />
              <span className={styles.taskPrice}>How much you would pay (AUD):</span>
              <input className={styles.taskPriceInput} name="taskPrice" type="number" value={this.state.taskPrice} onChange={this.handleInputChange} />
            </div>
            <select className={styles.taskType} name="taskType" value={this.state.taskType} onChange={this.handleInputChange}>
              <option value="Personal">Personal</option>
              <option value="Remotely">Remotely</option>
            </select>
            <textarea className={styles.taskDescription} name="taskDescription" value={this.state.taskDescription} onChange={this.handleInputChange} />
          </label>
          {/* <input className="reset" type="reset" onClick={this.handleResetClick} value="Reset" /> */}
          <input className={styles.taskSubmit} type="submit" value="Post My Task" />
        </form>
      </div>
    )
  }
}




export default PostATask;
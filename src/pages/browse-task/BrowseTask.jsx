import React from 'react';

import TaskCard from '../../components/task-card/TaskCard';
import TaskDetail from '../../components/task-detail/TaskDetail';
import styles from './BrowseTask.module.scss';

const tasksData = [
  {
    id: 1,
    title: 'Deliver 4 Chairs',
    location: 'Southbank VIC',
    date: 'Fri, 26 Jun',
    price: '50',
    avatar: 'https://eu7cmie.cloudimg.io/s/crop/64x64/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/1601230/14522708_650992468391040_309416730927525228_n-273a23a3be56bb18e68d0cae17812a4f.jpg',
    status: 'open'
  },
  {
    id: 2,
    title: 'Home decoration ideas',
    location: 'Remote',
    date: 'Mon, 29 Jun',
    price: '250',
    avatar: 'https://eu7cmie.cloudimg.io/s/crop/64x64/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/1601230/14522708_650992468391040_309416730927525228_n-273a23a3be56bb18e68d0cae17812a4f.jpg',
    status: 'open'
  },
  {
    id: 3,
    title: 'Help with studying a network subject',
    location: 'Hawthorn VIC',
    date: 'Mon, 15 Jun',
    price: '300',
    avatar: 'https://eu7cmie.cloudimg.io/s/crop/64x64/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/1601230/14522708_650992468391040_309416730927525228_n-273a23a3be56bb18e68d0cae17812a4f.jpg',
    status: 'open'
  },
  {
    id: 4,
    title: 'Deliver 4 Chairs',
    location: 'Southbank VIC',
    date: 'Fri, 26 Jun',
    price: '50',
    avatar: 'https://eu7cmie.cloudimg.io/s/crop/64x64/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/1601230/14522708_650992468391040_309416730927525228_n-273a23a3be56bb18e68d0cae17812a4f.jpg',
    status: 'open'
  },
  {
    id: 5,
    title: 'Home decoration ideas',
    location: 'Remote',
    date: 'Mon, 29 Jun',
    price: '250',
    avatar: 'https://eu7cmie.cloudimg.io/s/crop/64x64/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/1601230/14522708_650992468391040_309416730927525228_n-273a23a3be56bb18e68d0cae17812a4f.jpg',
    status: 'open'
  },
  {
    id: 6,
    title: 'Help with studying a network subject',
    location: 'Hawthorn VIC',
    date: 'Mon, 15 Jun',
    price: '300',
    avatar: 'https://eu7cmie.cloudimg.io/s/crop/64x64/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/1601230/14522708_650992468391040_309416730927525228_n-273a23a3be56bb18e68d0cae17812a4f.jpg',
    status: 'open'
  }
]

class BrowseTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskDetail: tasksData[0]
    }
  }

  getTaskDetail(taskId) {
    for (let i = 0; i < tasksData.length; i++){
      if (tasksData[i].id === taskId) {
        this.setState({
          taskDetail: tasksData[i]
        })
      }
    }
  }

  componentDidMount() {
    const paramValue = this.props.match.params.id
    if (paramValue) {
      this.getTaskDetail(parseInt(paramValue))
    }
    
  }

  render() {
    return (
      <div className={styles.container}>
        {/* BrowseTask */}
        <div className={styles.content}>
          <div className={styles.leftSide}>
            {
              tasksData.map((task) => (
                <TaskCard key={task.id} task={task}/>
              ))
            }
          </div>
  
          <div className={styles.rightSide}>
            <TaskDetail detail={this.state.taskDetail} /> 
          </div>
        </div>
      </div>
  
    )
  }
}
export default BrowseTask;
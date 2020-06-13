import PostATask from '../components/PostATask';
import ReviewTask from '../components/ReviewTask';
import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createHashHistory } from 'history';
const history = createHashHistory();

class RouterConfig extends React.Component {
  render() {
    //下方path为localhost：3000后面的后缀名。
    // 用以不同页面的跳转
    return(
      <Router history={history}>
        <switch>
          <Route path="/" exact render={() => (
            <Redirect to= "/ReviewTask"/>
          )}/>
          <Route path="/PostATask" component={PostATask}/>
          <Route path="/ReviewTask" component={ReviewTask}/>
        </switch>
      </Router>
    )
  }
}

export default RouterConfig;
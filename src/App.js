import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import BrowseTask from './pages/browse-task/BrowseTask'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/tasks" exact component={BrowseTask}  />
        <Route path='/tasks/:id' exact component={BrowseTask}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

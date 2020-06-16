import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostATask from './components/PostATask';
import ReviewTask from './components/ReviewTask';
import NewTask from './components/PostATaskButton/NewTask';
import RouterConfig from './Router/index';
import WhatUNeed from './components/AirPostTask/WhatUNeed';
import WhereWhen from './components/AirPostTask/WhereWhen';

// please activate different component in function APP to see different pages

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <NewTask />
        <RouterConfig /> */}
        {/* <PostATask /> */}
        {/* <ReviewTask /> */}
        {/* <WhatUNeed /> */}
        {/* <WhereWhen /> */}
      </header>
    </div>
  );
}

export default App;

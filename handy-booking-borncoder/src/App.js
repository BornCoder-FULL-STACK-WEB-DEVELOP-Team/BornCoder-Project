import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostATask from './components/PostATask';
import ReviewTask from './components/ReviewTask';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PostATask />
        <ReviewTask />
      </header>
    </div>
  );
}

export default App;

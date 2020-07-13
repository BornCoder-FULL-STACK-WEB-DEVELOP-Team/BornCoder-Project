import React, { useState, useEffect } from 'react';

import UserService from '../services/user.service';
import SearchBar from '../components/SearchBar/SearchBar';
import TaskList from '../components/TaskList/TaskList';

const Home = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div>
      <SearchBar />
      <h2 style={{ margin: '60px 30px 0 240px' }}>What do you need done?</h2>
      <TaskList></TaskList>
      <div style={{ margin: '60px' }}></div>
      {/* <TaskCard />
      <Footer /> */}
    </div>
  );
};

export default Home;

import React from 'react';
import { NavbarLeft, NavbarRight, NewsFeed } from './';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={`${styles.home}`}>
      <NavbarLeft />
      <NewsFeed />
      <NavbarRight />
    </div>
  );
};

export default Home;

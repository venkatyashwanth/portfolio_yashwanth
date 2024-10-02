import React from 'react';
import styles from "./home.module.scss";
import HeroText from '../HeroText';
const Home = () => {
  return (
    <div className={`${styles.pageLayout}`}>
      <HeroText />
    </div>
  )
}

export default Home
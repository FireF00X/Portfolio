/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import styles from './About.module.css'
import Title from '../../../../layouts/ui/title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';

const About = ({ changingTabs }) => {
  function handleClick() {
    changingTabs(5)
  }
  return (
    <div className={styles['about-me']}>
      <Title tilte='Willings' mainTitle='About me' />
      <div className={styles['about-container']}>
        <div className={styles['support']}>
          <FontAwesomeIcon icon={faClockRotateLeft} />
          <h4>Support</h4>
          <p>Online 24/7</p>
        </div>
        <div className={styles.right}>
          <div className={styles['p']}>
            I am a Front-End Web Developer (Reactjs) Seeking To Build up a strong career path, and working in a dynamic environment where ic an develop my skills, gain experience and utilize that towards the growth and development of the orgainzation
          </div>
          <button onClick={_ => handleClick()}>Contact Me</button>
        </div>
      </div>
    </div>
  )
}

export default About
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import styles from './Hero.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import myPhoto from '../../../assets/mine.png'

const Hero = () => {
    return (
        <div className={styles['hero-container']}>
            <div className={styles['background']}>
                <div className={styles['portfolio']}>
                    <FontAwesomeIcon icon={faCode} />&nbsp;
                    portfolio
                </div>
                <div className={styles['photo']}>
                    <img src={myPhoto} alt="" />
                </div>
                <div className={styles['title']}>
                    <p>I'm</p>
                    <p>Ahmed</p>
                    <p>Elsayed</p>
                    <p>
                        FrotnEnd Developer
                    </p>
                </div>
                <div className={styles['email']}>
                    <a href="mailTo:j.ahmed.elsaied@gmail.com" target='_blank'>
                        j.ahmed.elsaied@gmail.com
                        <FontAwesomeIcon icon={faInbox} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero
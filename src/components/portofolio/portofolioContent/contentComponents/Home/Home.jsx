import React from 'react';
import styles from './Home.module.css'
import Title from '../../../../layouts/ui/title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faFacebook, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className={`${styles['home-container']}`}>
      <Title tilte={'Data'} mainTitle={'info'} />
      <div className={`${styles['data']}`}>

        <div className={styles['info']}>
          <div className="name">
            <h4>Name: </h4>
            <p>Ahmed Moahmed Mohamed Elsayed</p>
          </div>
          <div className="age">
            <h4>Age: </h4>
            <p>26 years</p>
          </div>
          <div className="tilte">
            <h4>Titel: </h4>
            <p>Front End Developer</p>
          </div>
          <div className="degree">
            <h4>Degree: </h4>
            <p>Bachelor Degree</p>
          </div>
          <div className="adress">
            <h4>Adress: </h4>
            <p>Egypt/Cairo</p>
          </div>
          <div className="cv">
            <h4>Resume: </h4>
            <p className={styles['cv-box']}>Download CV</p>
          </div>
        </div>

        <div className={`${styles.links}`}>
          <Title tilte={'links'} mainTitle={'Social'} />
          <div className={styles['icons']}>
            <div className="gitHub">
              <a href="https://github.com/FireF00X?tab=repositories">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className="codepen">
              <a href="https://codepen.io/Black-skull">
                <FontAwesomeIcon icon={faCodepen} />
              </a>
            </div>
            <div className="linked-in">
              <a href="www.linkedin.com/in/ahmed-mohamed-a6a8a6200">
              <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className="whatsapp">
              <a href="https://wa.me/+201150243983">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
            <div className="face-book">
              <a href="https://www.facebook.com/profile.php?id=100003452634338">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home
/* eslint-disable react/jsx-no-target-blank */
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
import Title from '../../../../layouts/ui/title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const TalkToMeBox = ({ icon, title, paragraph, linkIcon, linkTo }) => {
  return (
    <div className={styles[`contact-box`]}>
      {<i>{icon}</i>}
      <h3>{title}</h3>
      <p>{paragraph}</p>
      <a href={linkTo} target='_blank'>Contact Me <i>{linkIcon}</i></a>
    </div>
  )
}
const object = {
  'user-name': '',
  'user-email': '',
  'subject': ''
}
const Contact = () => {

  //===================
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_79hmevh', 'template_k2i1wum', form.current, 'loRnemcyPaDT296TU')
      .then((result) => {
        console.log(result.text);
        console.log('message sent');
      }, (error) => {
        console.log(error.text);
      });
  };

//==========================
  const [data, setData] = useState(object);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value })
  }
//==============================
  return (
    <div className={styles['contact-container']}>
      <Title tilte='Get in Touch' mainTitle={'Contact Me'} />
      <div className={styles['box']}>
        <div className={styles['talk']}>
          <h3>Talk To Me</h3>
          <div>
            <TalkToMeBox icon={<FontAwesomeIcon icon={faEnvelope} size='2x' />}
              title={'Email'}
              paragraph={'j.ahmed.elsayed@gmail.com'}
              linkIcon={<FontAwesomeIcon icon={faArrowRight}
              />}
              linkTo={'mailTo:j.ahmed.elsaied@gmail.com'} />
            <TalkToMeBox icon={<FontAwesomeIcon icon={faWhatsapp} size='2x' />}
              title={"What's app"}
              paragraph={'+201150243983'}
              linkIcon={<FontAwesomeIcon icon={faArrowRight}
              />}
              linkTo={'https://wa.me/+201150243983'} />
          </div>
        </div>

        {/* start form */}

        
        <form className={styles['write']}
          onSubmit={e => {handleSubmit(e)
            sendEmail(e)
          }}
          ref={form} >
          <h3>Write Me Your Project</h3>
          <div className={styles['name']}>
            <label htmlFor="name">
              Name
            </label>
            <input type="text"
              name='user-name'
              id='name'
              placeholder='Enter Your Name'
              onChange={e => handleChange(e)} />
          </div>
          <div className={styles['email']}>
            <label htmlFor="email">
              Email
            </label>
            <input type="email"
              name='user-email'
              id='email'
              placeholder=' Enter Your Email'
              onChange={e => handleChange(e)} />
          </div>
          <div className={styles['project']}>
            <label htmlFor="project">
              Project
            </label>
            <textarea id='project'
              name='subject'
              placeholder='Send Me Your Requirements'
              onChange={e => handleChange(e)} />
          </div>
          <input type="submit" value={'Send Project'} />
        </form>
      </div>
    </div>
  )
}

export default Contact
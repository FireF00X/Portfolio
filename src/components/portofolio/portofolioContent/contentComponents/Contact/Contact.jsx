/* eslint-disable react/jsx-no-target-blank */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
import Title from '../../../../layouts/ui/title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useFormik } from 'formik';
import * as Yup from 'yup'

const TalkToMeBox = ({ icon, title, paragraph, linkIcon, linkTo }) => {
  return (
    <a href={linkTo} target='_blank' className={styles[`contact-box`]}>
      {<i>{icon}</i>}
      <h3>{title}</h3>
      <p>{paragraph}</p>
      <p href={linkTo} target='_blank'>Contact Me <i>{linkIcon}</i></p>
    </a>
  )
}


const Contact = () => {

  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      'user-name': '',
      'user-email': '',
      'subject': ''
    },
    validationSchema: Yup.object().shape({
      'user-name': Yup.string().required('Name is Required').min(5, 'Name Must be more than 5 char.'),
      'user-email': Yup.string().email().required('Email is Required'),
      'subject': Yup.string().required().min(40, 'Subject message must be more than 40 char.')
    }),
    onSubmit: (values) => {
      formik.resetForm()
    }
  })
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

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  //==============================
  return (
    <div className={styles['contact-container']} id='contact'>
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
          onSubmit={e => {
            handleSubmit(e);
            formik.handleSubmit();
            sendEmail(e)
          }}
          ref={form} >
          <h3>Write Me Your Project</h3>
          <div className={styles['name']}>
            <label htmlFor="name"
            >
              Name
            </label>
            <input type="text"
              className={formik.errors['user-name'] && formik.touched['user-name'] ? `${styles.error}` : ''}
              name='user-name'
              id='name'
              placeholder='Enter Your Name'
              onChange={formik.handleChange}
              value={formik.values['user-name']}
              onBlur={formik.handleBlur} />

            {formik.errors['user-name'] && formik.touched['user-name'] ? <p className={styles.error}>{formik.errors['user-name']}</p> : null}
          </div>

          <div className={styles['email']}>
            <label htmlFor="email">
              Email
            </label>
            <input type="email"
              className={formik.errors['user-email'] && formik.touched['user-email'] ? `${styles.error}` : ''}
              name='user-email'
              id='email'
              placeholder=' Enter Your Email'
              onChange={formik.handleChange}
              value={formik.values['user-email']}
              onBlur={formik.handleBlur} />

            {formik.errors['user-email'] && formik.touched['user-email'] ? <p className={styles.error}>{formik.errors['user-email']}</p> : null}
          </div>

          <div className={styles['project']}>
            <label htmlFor="project">
              Project
            </label>
            <textarea id='project'
              className={formik.errors['subject'] && formik.touched['subject'] ? `${styles.error}` : ''}
              name='subject'
              placeholder='Send Me Your Requirements'
              onChange={formik.handleChange}
              value={formik.values['subject']}
              onBlur={formik.handleBlur} />

            {formik.errors['subject'] && formik.touched['subject'] ? <p className={styles.error}>{formik.errors['subject']}</p> : null}
          </div>
          <input
            className={!formik.isValid ? styles.disabled : ''}
            type='submit'
            value={'Send Project'}
          />
        </form>
      </div>
    </div>
  )
}

export default Contact
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';
import Title from '../../../../layouts/ui/title/Title';
import styles from './Projects.module.css';
import cartSiteImage from '../../../../../assets/sites/cart.PNG'
import audiophileImage from '../../../../../assets/sites/audiophile.png'
import hoverStorePage from '../../../../../assets/sites/hoverStore.png'
import templatefourImg from '../../../../../assets/sites/Template-four.png'
import templateThreeImg from '../../../../../assets/sites/templatethree.png'
import templateTwoImg from '../../../../../assets/sites/templateTwo.png'
import templateOneImg from '../../../../../assets/sites/templateOne.png'
import TodoListImage from '../../../../../assets/sites/Todo list one.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../../../layouts/ui/modal/Modal';




const CardTemplate = ({ siteImage, siteTitle, siteDescrip, siteRepo
  , siteDemo }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className={styles['card']} onClick={() => setShow(!show)}>
        <img src={siteImage} alt="missed_photo" />
        <h2 className="title">
          {siteTitle}
        </h2>
      </div>
      <Modal show={show} setShow={setShow} siteTitle={siteTitle} siteImage={siteImage} siteDescrip={siteDescrip} siteRepo={siteRepo}
        siteDemo={siteDemo} />
    </>
  )
};

const Projects = () => {
  const projects = [ {
    siteTitle: 'audiophile-Store',
    siteImage: audiophileImage,
    siteDescrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nulla, adipisci aspernatur magni cumque natus libero, ullam eaque sit blanditiis assumenda quam minima. Vel aperiam sed ipsum exercitationem, iste ratione?',
    siteDemo: 'https://firef00x.github.io/audiophile/',
    siteRepo: 'https://github.com/FireF00X/audiophile'
  }, {
    siteTitle: 'HoverStor',
    siteImage: hoverStorePage,
    siteDescrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nulla, adipisci aspernatur magni cumque natus libero, ullam eaque sit blanditiis assumenda quam minima. Vel aperiam sed ipsum exercitationem, iste ratione?',
    siteDemo: 'https://firef00x.github.io/Hover-store/',
    siteRepo: 'https://github.com/FireF00X/Hover-store'
  },
  {
    siteTitle: 'Template-Four',
    siteImage: templatefourImg,
    siteDescrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nulla, adipisci aspernatur magni cumque natus libero, ullam eaque sit blanditiis assumenda quam minima. Vel aperiam sed ipsum exercitationem, iste ratione?',
    siteDemo: 'https://firef00x.github.io/Template-four/',
    siteRepo: 'https://github.com/FireF00X/Template-four'
  },
  {
    siteTitle: 'Template-Three',
    siteImage: templateThreeImg,
    siteDescrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nulla, adipisci aspernatur magni cumque natus libero, ullam eaque sit blanditiis assumenda quam minima. Vel aperiam sed ipsum exercitationem, iste ratione?',
    siteDemo: 'https://firef00x.github.io/template-three/',
    siteRepo: 'https://github.com/FireF00X/template-three'
  },
  {
    siteTitle: 'Template-Two',
    siteImage: templateTwoImg,
    siteDescrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nulla, adipisci aspernatur magni cumque natus libero, ullam eaque sit blanditiis assumenda quam minima. Vel aperiam sed ipsum exercitationem, iste ratione?',
    siteDemo: 'https://firef00x.github.io/template-two/',
    siteRepo: 'https://github.com/FireF00X/template-two'
  },
  {
    siteTitle: 'Template-One',
    siteImage: templateOneImg,
    siteDescrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nulla, adipisci aspernatur magni cumque natus libero, ullam eaque sit blanditiis assumenda quam minima. Vel aperiam sed ipsum exercitationem, iste ratione?',
    siteDemo: 'https://firef00x.github.io/template-one/',
    siteRepo: 'https://github.com/FireF00X/template-one'
  },{
    siteTitle: 'Todo-List',
    siteImage: TodoListImage,
    siteDescrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nulla, adipisci aspernatur magni cumque natus libero, ullam eaque sit blanditiis assumenda quam minima. Vel aperiam sed ipsum exercitationem, iste ratione?',
    siteDemo: 'https://firef00x.github.io/ToDoListApp/',
    siteRepo: 'https://github.com/FireF00X/ToDoListApp'
  },
  {
    siteTitle: 'Cart-App',
    siteImage: cartSiteImage,
    siteDescrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nulla, adipisci aspernatur magni cumque natus libero, ullam eaque sit blanditiis assumenda quam minima. Vel aperiam sed ipsum exercitationem, iste ratione?',
    siteDemo: 'https://firef00x.github.io/Cart-app/',
    siteRepo: 'https://github.com/FireF00X/Cart-app'
  }, ]

  return (
    <div className={`${styles['projects-container']}`}>
      <Title tilte={'My Work'} mainTitle={'Projects'} />
      <div className={`${styles['cards-container']}`}>
        {projects.map((project, i) => (
          <CardTemplate key={i}
            siteImage={project.siteImage}
            siteTitle={project.siteTitle}
            siteDescrip={project.siteDescrip} 
            siteDemo={project.siteDemo}
            siteRepo={project.siteRepo}/>
        ))}
      </div>
      <button className={styles['see-all']}><a href='https://github.com/FireF00X?tab=repositories' target='_blank' >See All <FontAwesomeIcon icon={faArrowRightLong} />
      </a></button>
    </div>
  )
}

export default Projects
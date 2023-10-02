import React from 'react';
import styles from './Skilles.module.css';
import Title from '../../../../layouts/ui/title/Title';
import htmlImg from '../../../../../assets/skills/html.png';
import cssImg from '../../../../../assets/skills/css3.png';
import jsImg from '../../../../../assets/skills/js.png';
import sassImg from '../../../../../assets/skills//sass.png';
import bootstrapImg from '../../../../../assets/skills/Bootstrap.png';
import apiImg from '../../../../../assets/skills/apis.png';
import reactimg from '../../../../../assets/skills/reactjs.png';
import nodeImg from '../../../../../assets/skills/nodejs.png';
import TypeScriptImg from '../../../../../assets/skills/typescript-def.png';


const skills = [{
  name: 'HTML5',
  img: htmlImg
},
{
  name: 'CSS3',
  img: cssImg
}, {
  name: 'BootStrap',
  img: bootstrapImg
}, {
  name: 'JavaScript',
  img: jsImg
}, {
  name: 'TypeScript',
  img: TypeScriptImg
}, {
  name: 'APIs',
  img: apiImg
}, {
  name: 'ReactJS',
  img: reactimg
}, {
  name: 'NodeJS',
  img: nodeImg
}, {
  name: 'Sass',
  img: sassImg
}];
const Skilles = () => {
  return (
    <div className={styles['skills-container']}>
      <Title tilte='Abilities' mainTitle={'My Skills'} />
      <ul>
        {skills.map((op, i) => {
          return (
            <li key={i}>
              <img src={op.img} alt="icon" />
              <p>{op.name}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Skilles
import React from 'react'
import PortContent from './portofolioContent/PortContent';
import style from './MainPortofolio.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const MainPortofolio = () => {
    return (
        <div className={style['main-portfolio-container']}>
            <div className={style.card}>
                <div className={style['header']}>
                    <FontAwesomeIcon icon={faCode} />
                    <p>Ahmed Elsayed</p>
                </div>
                <PortContent />
            </div>
        </div>
    )
}

export default MainPortofolio
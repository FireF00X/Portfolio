import React from 'react';
import styles from './Title.module.css'

const Title = ({ tilte, mainTitle }) => {
    return (
        <div className={styles['title-container']}>
            <p>{tilte} </p>
            <h3>{mainTitle}</h3>
        </div>
    )
}

export default Title
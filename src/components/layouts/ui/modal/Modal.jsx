/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import styles from './Modal.module.css'
import ReactDOM from 'react-dom';

const Modal = ({ siteImage, siteTitle, siteDescrip, siteRepo
    , siteDemo, show, setShow }) => {
    if (!show) {
        return null;
    }
    return (
        ReactDOM.createPortal(
            <>
                <div className={`${styles['detail-card']}  ${show ? '' : styles['none']}`} onClick={() => setShow(!show)} >
                    <div className="details" >
                        <div className="photo">
                            <img src={siteImage} alt="missed_photo" />
                        </div>
                        <div className="right">
                            <h2 className="title">
                                {siteTitle}
                            </h2>
                            <p className="description">{siteDescrip}</p>
                            <div className="buttons">
                                <button>
                                    <a href={`${siteRepo}`} target='_blank'>Source Code</a>
                                </button>
                                <button><a href={`${siteDemo}`} target='_blank'>See Demo</a></button>
                            </div>
                        </div>
                    </div>
                </div>

            </>,
            document.querySelector('#modal-root')
        )

    )
};
// onClick={() => setShow(!show)}
export default Modal
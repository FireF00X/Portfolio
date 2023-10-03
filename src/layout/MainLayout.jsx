import React, { useState } from 'react'
import Hero from '../components/portofolio/hero/Hero'
import './mainLayout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

const MainLayout = ({ children }) => {
    const [rotate, setRotate] = useState(false)
    return (
        <main>
            <div className={`container ${rotate ? 'rotate' : ''}`}>
                <div onClick={_ => setRotate(!rotate)}>
                    <FontAwesomeIcon icon={faRotate} />
                </div>
                <section>
                    <Hero />
                </section>
                <section>
                    {children}
                </section>
            </div>
        </main>
    )
}

export default MainLayout
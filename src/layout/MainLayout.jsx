import React from 'react'
import Hero from '../components/portofolio/hero/Hero'
import './mainLayout.css';

const MainLayout = ({ children }) => {
    return (
        <main>
            <div className='container'>
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
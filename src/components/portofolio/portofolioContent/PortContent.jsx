import React from 'react'
import Tabs from '../../layouts/ui/tabs/Tabs'
import Tab from '../../layouts/ui/tabs/Tab'
import styles from './PortContent.module.css'
import About from './contentComponents/About/About'
import Contact from './contentComponents/Contact/Contact'
import Skilles from './contentComponents/Skilles/Skilles'
import Projects from './contentComponents/Projects/Projects'
import Home from './contentComponents/Home/Home'

const PortContent = () => {
    return (
        <div className={styles['tabs-container']}>
            <Tabs >
                <Tab title='Info'>
                    <Home />
                </Tab>
                <Tab title='Skills'>
                    <Skilles />
                </Tab>
                <Tab title='Projects'>
                    <Projects />
                </Tab>
                <Tab title='About'>
                    <About />
                </Tab>
                <Tab title='Contact'>
                    <Contact />
                </Tab>
            </Tabs>
        </div>
    )
}

export default PortContent
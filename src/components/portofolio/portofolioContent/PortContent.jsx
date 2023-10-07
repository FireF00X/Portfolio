import React, { useState } from 'react'
import Tabs from '../../layouts/ui/tabs/Tabs'
import Tab from '../../layouts/ui/tabs/Tab'
import styles from './PortContent.module.css'
import About from './contentComponents/About/About'
import Contact from './contentComponents/Contact/Contact'
import Skilles from './contentComponents/Skilles/Skilles'
import Projects from './contentComponents/Projects/Projects'
import Home from './contentComponents/Home/Home'

const PortContent = () => {
    const [defaultActive, setDefaultActive] = useState(1);

    function changingTabs(data) {
        setDefaultActive(+data);
    }
    return (
        <div className={styles['tabs-container']}>
            <Tabs defaultActive={defaultActive} setDefaultActive={setDefaultActive}>
                <Tab title='Info'>
                    <Home />
                </Tab>
                <Tab title='Skills'>
                    <Skilles />
                </Tab>
                <Tab title='Projects'>
                    <Projects />
                </Tab>
                <Tab title='About' >
                    <About changingTabs={changingTabs} />
                </Tab>
                <Tab title='Contact' >
                    <Contact />
                </Tab>
            </Tabs>
        </div>
    )
}

export default PortContent
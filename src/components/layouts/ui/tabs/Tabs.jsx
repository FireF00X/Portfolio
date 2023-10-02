import React, { useState } from 'react'
import style from './tabs.module.css'

const Tabs = ({ children, defaultActive = 1 }) => {

    const [active, setActive] = useState(defaultActive);

    const childrenTitle = children.map(t => (t.props.title));
    const childrenContent = children.map(t => t.props.children)


    return (
        <div className={style['tabs']}>
            <div className="titles">
                {childrenTitle.map((t, i) => (
                    <div key={i + 1}
                        className={`tab-title ${active === i + 1 ? 'active' : ''}`}
                        onClick={() => setActive(i + 1)}
                    >{t}</div>
                ))}
            </div>
            <div className="content">
                {childrenContent[active - 1]}
            </div>
        </div>
    )
}

export default Tabs
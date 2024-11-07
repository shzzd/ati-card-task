import React from 'react'
import classes from './PopUpTemplate.module.css'

export default function PopUpTemplate({ children }) {
    return (
        <div className={classes.model}>
            <div className={classes.overlay}></div>
            <div className={classes.childDiv}>{children}</div>
        </div>
    )
}

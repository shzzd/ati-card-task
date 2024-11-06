import React from 'react'
import classes from './CardView.module.css'
import CardKeeper from '../Resource/CardKeeper/CardKeeper'

export default function CardView() {
    return (
        <div className={classes.wrapper}>
            <CardKeeper />
        </div>
    )
}

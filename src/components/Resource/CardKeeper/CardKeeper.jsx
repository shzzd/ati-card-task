import React from 'react'
import classes from './CardKeeper.module.css'
import { HiSquare3Stack3D } from 'react-icons/hi2'
import { FaClipboardList } from 'react-icons/fa'
import { IoChatbubblesOutline } from 'react-icons/io5'
import { GrAttachment } from 'react-icons/gr'
import { FaCalendarDays } from 'react-icons/fa6'

export default function CardKeeper() {
    return (
        <div className={classes.wrapper}>
            <div>
                <p>Incomplete</p>
                <p>0</p>
            </div>
            <div className={classes.cards}>
                {[...Array(10)].map((e, index) => (
                    <div className={classes.card}>
                        <div>
                            <p>Client Name</p>
                            <p>Sadik Istiak</p>
                        </div>
                        <div>
                            <div>
                                <HiSquare3Stack3D className={classes.icon} />
                                Lorem
                            </div>
                            <div>
                                <FaClipboardList className={classes.icon} />
                                1/2
                            </div>
                        </div>
                        <div>
                            <div>12+</div>
                            <div>
                                <IoChatbubblesOutline className={classes.icon} /> 15
                            </div>
                            <div>
                                <GrAttachment className={classes.icon} />
                                25
                            </div>
                            <div>
                                <FaCalendarDays className={classes.icon} />
                                Date
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

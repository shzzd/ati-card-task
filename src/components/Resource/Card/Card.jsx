import React, { useState } from 'react'
import { HiSquare3Stack3D } from 'react-icons/hi2'
import { FaClipboardList } from 'react-icons/fa'
import { IoChatbubblesOutline } from 'react-icons/io5'
import { GrAttachment } from 'react-icons/gr'
import { FaCalendarDays } from 'react-icons/fa6'
import classes from './Card.module.css'
import Modal from '../Modal/Modal'
import PopUpTemplate from '../PopUpTemplate/PopUpTemplate'

export default function Card(props) {
    const [isOpen, setOpen] = useState(false)
    const handleAttachment = () => {
        props.setCardId(props.index)
        setOpen(true)
    }
    return (
        <>
            <div className={classes.card}>
                <div>
                    <div>
                        <div className={classes.dp1}></div> Client Name
                    </div>
                    <div>
                        <div className={classes.dp2}></div> Sadik Istiak
                    </div>
                </div>
                <div>
                    <div id={classes.details}>
                        <HiSquare3Stack3D className={classes.icon1} />
                        Lorem ipsum dolor sit amet curn sdfds asdie sdfe sde
                    </div>
                    <div>
                        <FaClipboardList className={classes.icon2} />
                        1/2
                    </div>
                </div>
                <div>
                    <div id={classes.dp}>
                        <div className={classes.dp3}></div>
                        <div className={classes.dp4}></div>
                        <div>12+</div>
                    </div>
                    <div>
                        <IoChatbubblesOutline className={classes.icon3} /> 15
                    </div>
                    <div>
                        <GrAttachment className={classes.icon4} onClick={(e) => handleAttachment(e)} />
                        {props.uploadedFile.length}
                    </div>
                    <div>
                        <FaCalendarDays className={classes.icon5} />
                        30-12-22
                    </div>
                </div>
            </div>
            {isOpen && props.index === props.cardId && (
                <PopUpTemplate>
                    <Modal
                        handleFileClick={props.handleFileClick}
                        handleFileChange={props.handleFileChange}
                        fileRef={props.fileRef}
                        fileName={props.fileName}
                        handleUpload={props.handleUpload}
                        uploadedFile={props.uploadedFile}
                        setOpen={setOpen}
                    />
                </PopUpTemplate>
            )}
        </>
    )
}

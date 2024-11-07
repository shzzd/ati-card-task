import React, { useState } from 'react'
import classes from './CardKeeper.module.css'
import Card from '../../Resource/Card/Card'

export default function CardKeeper(props) {
    const [cardId, setCardId] = useState('')
    return (
        <div className={classes.wrapper}>
            <div>
                <div>
                    {(props.index === 0 || props.index === 1 || props.index === 2) && (
                        <div
                            className={classes.iconMain}
                            style={{
                                backgroundColor: `${
                                    props.index === 0
                                        ? 'var(--red)'
                                        : props.index === 1
                                        ? 'var(--skyblue)'
                                        : props.index === 2
                                        ? 'var(--yellow)'
                                        : ''
                                }`,
                            }}></div>
                    )}
                    {props.title}
                </div>
                <div>0</div>
            </div>
            <div className={classes.cards}>
                {[...Array(10)].map((e, index) => (
                    <span key={index}>
                        <Card
                            index={index}
                            setCardId={setCardId}
                            cardId={cardId}
                            handleFileClick={props.handleFileClick}
                            handleFileChange={props.handleFileChange}
                            fileRef={props.fileRef}
                            fileName={props.fileName}
                            handleUpload={props.handleUpload}
                            uploadedFile={props.uploadedFile}
                        />
                    </span>
                ))}
            </div>
        </div>
    )
}

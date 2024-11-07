import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import classes from './CardView.module.css'
import CardKeeper from './CardKeeper/CardKeeper'

export default function CardView() {
    const [file, setFile] = useState('')
    const fileRef = useRef(null)

    const handleFileClick = () => {
        fileRef.current.click()
    }

    const handleFileChange = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            return
        } else {
            const file = e.target.files[0]
            setFile(file)
        }
    }
    const [uploadedFile, setUploadedFile] = useState([])
    const handleUpload = () => {
        file && setUploadedFile([...uploadedFile, file])
    }

    const cardList = ['Incomplete', 'To Do', 'Doing', 'Under Review', 'Completed', 'Overdue']
    return (
        <div className={classes.wrapper}>
            {cardList.map((title, index) => (
                <CardKeeper
                    title={title}
                    index={index}
                    key={index}
                    handleFileClick={handleFileClick}
                    handleFileChange={handleFileChange}
                    fileRef={fileRef}
                    fileName={file.name}
                    handleUpload={handleUpload}
                    uploadedFile={uploadedFile}
                />
            ))}
        </div>
    )
}

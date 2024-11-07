import React from 'react'
import classes from './Modal.module.css'
import { IoCloseSharp } from 'react-icons/io5'
import { IoIosCloseCircle } from 'react-icons/io'
import { BsCloudUploadFill } from 'react-icons/bs'

export default function Modal(props) {
    const handleClose = () => {
        props.setOpen(false)
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.inputClick} onClick={props.handleFileClick}>
                <div>
                    <BsCloudUploadFill />
                </div>
                <div>Click here to select</div>
                <div>max size 5mb</div>
                <input required type={'file'} onChange={props.handleFileChange} ref={props.fileRef} />
            </div>
            {props.fileName ? (
                <div className={classes.selectedName}>Selected File: {props.fileName}</div>
            ) : (
                <div>No file selected</div>
            )}
            <button className={classes.btnUpload} onClick={(e) => props.handleUpload(e)}>
                Upload
            </button>
            {props.uploadedFile && props.uploadedFile.length !== 0 && (
                <div className={classes.listView}>Uploaded Files:</div>
            )}
            <div className={classes.file}>
                {props.uploadedFile &&
                    props.uploadedFile.map((file, index) => (
                        <div className={classes.files} key={index}>
                            {index + 1}. {file.name}
                        </div>
                    ))}
            </div>
            <div className={classes.close} onClick={(e) => handleClose(e)}>
                <IoIosCloseCircle />
            </div>
        </div>
    )
}

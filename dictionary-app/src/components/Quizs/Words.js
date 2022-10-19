import React from 'react'
import { useContext, useState } from 'react';
import { WordContext } from '../../contexts';
import { Button, Modal } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'
import Editwords from '../Editword/Editwords';

import './style.scss'

const Words = () => {
    const { words } = useContext(WordContext)

    const [currentWord, setCurrentWord] = useState(0)
    const [startBtn, setStartBtn] = useState(false)
    const [isActive, setIsActive] = useState(true)
    const [showEdit, setShowEdit] = useState(false)

    const mainW = words[currentWord];

    const prev = () => {
        setCurrentWord(currentWord - 1)
    }

    const next = () => {
        setCurrentWord(currentWord + 1)
    }

    const editCurrentWord = (wordC, meaningC) => {
        mainW.word  = wordC;
        mainW.meaning = meaningC
    }

    return (

        <>
            <div className='container p-5'>
                <div className='row position-relative'>
                    <div className={`col-12 bg-white rounded card card-face position-absolute top-0 start-0 end-0 mx-auto ${isActive ? 'active' : 'passive'} `}>
                        <div className='card-header bg-transparent d-flex justify-content-between align-items-center border-bottom-0'>
                            <div className=''>
                                <button className='btn btn-warning'>Revise later</button>
                                <button className='btn btn-success mx-2'>Learned</button>
                                <button type='button' onClick={() => setShowEdit(true)} className='btn btn-danger'>Edit</button>
                            </div>
                            <FaStar type='button' onClick={() => setStartBtn(!startBtn)} className={startBtn ? 'text-warning' : 'text-dark'} />
                        </div>
                        <div type='button' onClick={() => setIsActive(!isActive)} className='card-body d-flex align-items-center justify-content-center'>
                            {mainW === undefined ? 'Loading...' : mainW.word}
                        </div>
                        <div className='card-footer d-flex bg-transparent border-top-0'>
                            <button onClick={prev} className={`btn btn-dark rounded col-6 me-2 ${currentWord === 0 && 'disabled'}`} ><MdOutlineArrowBackIosNew />
                            </button>
                            <button onClick={next} className={`btn btn-dark rounded col-6 ${currentWord === words.length && 'disabled'}`}><MdOutlineArrowForwardIos /></button>
                        </div>
                    </div>
                    <div type='button' onClick={() => setIsActive(!isActive)} className={`d-flex col-12 bg-white rounded card card-back mx-auto position-absolute top-0 start-0 end-0 ${isActive ? 'passive' : 'active'} `}>
                        <div className='card-body d-flex align-items-center justify-content-center'>
                            <h1>
                                {mainW === undefined ? 'Loading...' : mainW.meaning}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>


            <Modal show={showEdit} onHide={() => setShowEdit(false)}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>
                        Edit Employee
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Editwords editWord={mainW}  editCurrentWords = {editCurrentWord}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={() => setShowEdit(false)}>
                        Close Modal
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Words

import React from 'react'
import { useContext } from 'react';
import { WordContext } from '../../contexts/index'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.scss'

const Learned = () => {

    const { words } = useContext(WordContext)

    return (
        <Container className='p-4'>
            <Row>
                <Col className='text-center'><h3>Total <span>3000</span> words</h3> </Col>
            </Row>
            <Row>
                {
                    words.map((word, i) => {
                        return (
                            <Col xs={4} key={i} className='learned__box d-flex align-items-center justify-content-center rounded p-4'>
                                <div className='learned bg-white rounded w-100 h-100 d-flex align-items-center justify-content-center border border-5 border-danger'>
                                    <h2 className='text-center'>
                                        {word.word}
                                    </h2>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default Learned

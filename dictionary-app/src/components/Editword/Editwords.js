import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'

const Editwords = (props) => {

    const {editCurrentWords} = props.editCurrentWords

    const [handleValue, setHandleValue] = useState(props.editWord)

    const {word, meaning} = handleValue;


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(word,meaning)
        editCurrentWords(word,meaning);
    }
    const inputChange = (e) => {
        setHandleValue({
            [e.target.name] : e.target.value
        })
    }

    return (
        <div>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group>
                    <Form.Control className='mb-3'
                        name='word'
                        type='text'
                        value={word}
                        onChange={(e) => inputChange(e)}
                        placeholder='Word'
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Control className='mb-3'
                        name='meaning'
                        type='text'
                        value={meaning}
                        placeholder='Mean Of Word'
                        onChange={(e) => inputChange(e)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button variant='success' type='submit' className='form-control'>Save Edit</Button>
            </Form>
        </div>
    )
}

export default Editwords

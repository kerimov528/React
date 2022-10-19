import { Form, Button } from 'react-bootstrap'
import { EmployeeContext } from '../contexts/EmployeeContext';
import {useState, useContext } from 'react';

const EditForm = ({editInfos}) => {

    const [editedInfo, setEditedInfo] = useState(editInfos)

    const {id,name, email, address, phone} = editedInfo

    const { updateEmployee } = useContext(EmployeeContext);

    const updatedEmployee = {id,name,email,address,phone};

    
    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id,updatedEmployee);
    }

    const onInputChange = (e) => {
        setEditedInfo({ ...editedInfo, [e.target.name] : e.target.value })
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group>
                <Form.Control className='mb-3'
                    name='name'
                    type='text'
                    placeholder='Name *'
                    required
                    value={name}
                    onChange={(e) => onInputChange(e)}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Control className='mb-3' 
                name='email' 
                value={email}
                onChange={(e) => onInputChange(e)}
                type='email' 
                placeholder='Email *' 
                required >
                </Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Control className='mb-3' 
                name='address'
                value={address}
                onChange={(e) => onInputChange(e)}
                as='textarea' row='3' 
                placeholder='Address *' 
                required>
                </Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Control className='mb-3' 
                name='phone' 
                value={phone}
                onChange={(e) => onInputChange(e)}
                type='text' 
                placeholder='Phone'
                >
                </Form.Control>
            </Form.Group>

            <Button variant='success' type='submit' className='form-control'>Save Edit</Button>
        </Form>
    )
}

export default EditForm;
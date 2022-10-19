import { Form, Button } from 'react-bootstrap'
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext, useState } from 'react';

const AddForm = () => {

    const { addEmployee } = useContext(EmployeeContext)
    const [employees, setEmployees] = useState({
        name: '', email: '', address: '', phone: ''
    })

    const {name,email, address, phone} = employees;

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(name,email,address,phone);
    }

    const onInputChange = (e) => {
        setEmployees({ ...employees, [e.target.name]: e.target.value })
    }

    return (
        <Form onSubmit={handleSubmit}>

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
                <Form.Control className='mb-3' name='email' type='email' placeholder='Email *' required
                    value={email}
                    onChange={(e) => onInputChange(e)}>
                </Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Control className='mb-3' name='address' as='textarea' row='3' placeholder='Address *' required
                value={address}
                    onChange={(e) => onInputChange(e)}>
                </Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Control className='mb-3' name='phone' type='text' placeholder='Phone'
                    value={phone}
                    onChange={(e) => onInputChange(e)}>
                </Form.Control>
            </Form.Group>

            <Button variant='success' type='submit' className='form-control'>Add New Employee</Button>
        </Form>
    )
}

export default AddForm;
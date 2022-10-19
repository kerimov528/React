import Employee from './Employee'
import AddForm from './AddForm'
import { EmployeeContext } from '../contexts/EmployeeContext'
import { Modal, Button, Alert } from 'react-bootstrap'
import { useState, useEffect, useContext } from 'react';

const EmployeeList = () => {

    const [showAlert, setShowAlert] = useState(false);
    const [show, setShow] = useState(false);

    const { employees } = useContext(EmployeeContext);

    console.log(employees);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    };

    useEffect(() => {
        handleClose();

        return () => {
            handleAlert();
        }
    }, [employees])


    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <button type='button' onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></button>
                    </div>
                </div>
            </div>

            <Alert show={showAlert} variant="success">
                Employee, successfully updated !
            </Alert>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.sort((a,b) => a.name < b.name ? -1 : 1).map((employee) => (
                            <tr key={employee.id}>
                                <Employee employee={employee} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Employees</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant='warning'>Close Modal</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EmployeeList;
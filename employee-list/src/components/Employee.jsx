import React from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import EditForm from './EditForm';

const Employee = ({ employee }) => {

    const { deleteEmployee } = useContext(EmployeeContext);

    const [show, setShow] = useState(false);
    const [editInfo, setEditInfo] = useState({
        id: '', name: '', email: '', address: '', phone: ''
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    useEffect(() => {
        handleClose();
    }, [employee])


    const editInput = (id) => {
        handleShow();
        setEditInfo({
            id,
            name: employee.name,
            email: employee.email,
            address: employee.address,
            phone: employee.phone
        })
    }

    return (

        <React.Fragment>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>
                <button onClick={(e) => editInput(employee.id)} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
                <button onClick={() => deleteEmployee(employee.id)} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
            </td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>
                        Edit Employee
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm editInfos={editInfo}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose}>
                        Close Modal
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default Employee;
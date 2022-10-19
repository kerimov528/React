import React from 'react'
import { useState, useEffect } from 'react';
export const EmployeeContext = React.createContext();
var uniqid = require('uniqid');

function EmployeeContextProvider(props) {
    const [employees, setEmployees] = useState([
        { id: uniqid.process(), name: 'Thomas Hardy', email: 'thomashardy@mail.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(171) 555-2222' },
        { id: uniqid.process(), name: 'Dominique Perrier', email: 'dominiqueperrier@mail.com', address: 'Obere Str. 57, Berlin, Germany', phone: '(313) 555-5735' },
        { id: uniqid.process(), name: 'Maria Anders', email: 'mariaanders@mail.com', address: '25, rue Lauriston, Paris, France', phone: '(503) 555-9931' },
        { id: uniqid.process(), name: 'Fran Wilson', email: 'franwilson@mail.com', address: 'C/ Araquil, 67, Madrid, Spain', phone: '(204) 619-5731' },
        { id: uniqid.process(), name: 'Martin Blank', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097' }
    ])

    useEffect(() => {
        const employees = localStorage.getItem('employees')
        setEmployees(JSON.parse(employees))
    }, [])

    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees))
    })


    const addEmployee = (id, name, email, address, phone) => {
        id = uniqid.process();
        setEmployees([...employees, { id, name, email, address, phone }]);
    }

    const deleteEmployee = (id) => {
        setEmployees(employees.filter((employee) => employee.id !== id));
    }

    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map((employee) => (employee.id === id ? updatedEmployee : employee)))
    }

    return (
        <EmployeeContext.Provider value={{ employees, addEmployee, deleteEmployee, updateEmployee }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;

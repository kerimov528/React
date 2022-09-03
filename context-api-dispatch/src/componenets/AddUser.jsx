import React, { Component } from 'react'
import UserConsumer from '../context';
import posed from 'react-pose'

const uniqid = require('uniqid');
console.log(uniqid())

const Animation = posed.div({
    visible: {
        opacity: 1,
        applyAtStart: {
            display: "block"
        }
    },
    hidden: {
        opacity: 0,
        applyAtEnd: {
            display: "none"
        }
    }
})

export default class AddUser extends Component {
    state = {
        isVisible: false,
        name: "",
        email: "",
        age: ""
    }
    changeVisiblity = (e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addUser = (dispatch, e) => {
        e.preventDefault()
        const { name, email, age } = this.state

        const newUser = {
            id: uniqid(),
            name,
            email,
            age
        }
        dispatch({ type: "ADD_USER", payload: newUser })
    }
    render() {

        return <UserConsumer>

            {
                value => {
                    const { isVisible, name, email, age } = this.state
                    const { dispatch } = value
                    return (
                        <div className='container mb-4'>
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-8">
                                    <button className="btn btn-dark text-white mx-auto form-control mb-4" onClick={this.changeVisiblity}>
                                        {isVisible ? 'Hide Form' : 'Show Form'}
                                    </button>
                                    <Animation
                                        className='animation'
                                        pose={isVisible ? 'visible' : 'hidden'}>

                                        <div className="card">
                                            <div className="card-header">
                                                <h4>Add User</h4>
                                            </div>
                                            <div className="card-body">
                                                <form onSubmit={this.addUser.bind(this, dispatch)}>
                                                    <div className="form-group">
                                                        <label htmlFor="name" className='d-block mb-2'>Name</label>
                                                        <input type="text" className='form-control mb-2' name='name'
                                                            onChange={this.changeInput}
                                                            value={name} />
                                                        <label htmlFor="email" className='d-block mb-2'>Email</label>
                                                        <input type="email" className='form-control mb-2'
                                                            name='email'
                                                            onChange={this.changeInput}
                                                            value={email} />
                                                        <label htmlFor="age" className='d-block mb-2'>Age</label>
                                                        <input type="text" className='form-control mb-2'
                                                            name='age'
                                                            onChange={this.changeInput}
                                                            value={age} />
                                                    </div>
                                                    <button className='btn btn-danger form-control'>
                                                        Send Data
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </Animation>
                                </div>
                            </div>
                        </div>
                    )
                }
            }

        </UserConsumer>

    }
}

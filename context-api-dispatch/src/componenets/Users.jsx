import React, { Component } from 'react'
import  '../App.css'
import User from './User'
import UserConsumer from '../context';

class Users extends Component {
    render() {

        return (
            <UserConsumer>
                {value => {
                    return (
                        <div>
                            {
                                value.users.map(user => {

                                    return (
                                        <User
                                            id={user.id}
                                            name={user.name}
                                            email={user.email}
                                            age={user.age}
                                        />
                                    )
                                })}
                        </div>
                    )
                }}
            </UserConsumer>
        )


    }
}

export default Users;

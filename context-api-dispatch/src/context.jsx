import React, { Component } from 'react'


const UserContext = React.createContext();

const reducer = (state, action) => {

    switch (action.type) {
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
    }

}

export class UserProvider extends Component {
    state = {
        users: [
            {
                id: 1,
                name: "Anar",
                email: "anarrkerimli@gmail.com",
                age: 20
            }
            ,
            {
                id: 2,
                name: "Turan",
                email: "anarrkerimli@gmail.com",
                age: 44
            },
            {
                id: 3,
                name: "Ali",
                email: "anarrkerimli@gmail.com",
                age: 20
            }
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;

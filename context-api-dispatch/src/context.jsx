import React, { Component } from 'react'
import axios from 'axios'

const UserContext = React.createContext();

const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.payload]
            }


    }

}

export class UserProvider extends Component {
    state = {
        users: [],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    componentDidMount = async () => {
        const response = await axios.get("http://localhost:3000/users")
        this.setState({
            users: response.data
        })
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

import React, { Component } from 'react'
import UserConsumer from '../context'



class User extends Component {
    state = {
        isVisible: false
    }

    onClickEvent = (e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    onDeleteUser = (dispatch, e) => {
        const { id } = this.props;

        dispatch({
            type: "DELETE_USER", payload: id
        })
    }
    render() {

        const { name, email, age } = this.props;
        const { isVisible } = this.state
        return (

            <UserConsumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                                <div className="container app">
                                    <div className="row d-flex flex-column align-items-center">
                                        <div className="col-md-8">
                                        <div className='card mb-4'>
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <h4 onClick={this.onClickEvent}>{name}</h4>
                                            <span onClick={this.onDeleteUser.bind(this, dispatch)}>Sil</span>
                                        </div>
                                        {isVisible ? (
                                            <div className="card-body" style={isVisible ? {backgroundColor: "rgb(163, 217, 255)", color: "black",  fontSize: "1.2rem"} : null}>
                                                <p>Email: {email}</p>
                                                <p>Age: {age}</p>
                                            </div>
                                        ) : null}
                                    </div>
                                        </div>
                                    </div>
                                </div>

                        )
                    }

                }
            </UserConsumer>

        )
    }
}

export default User;

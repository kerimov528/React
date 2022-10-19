
import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        count: 0
    }


    render() {
        const { count } = this.state
        return (
            <div>
                <div className='main-item d-flex mt-4 align-items-center'>
                    <span className={`badge border-0 me-4 ${count === 0 ? 'bg-warning' : 'bg-primary'}`}><h4>{count === 0 ? 'zero' : count}</h4></span>
                    <button className='btn btn-md bg-secondary text-white me-2' onClick={() => this.setState({ count: this.state.count + 1 })}>
                        <h5>+</h5>
                    </button>
                    <button className='btn btn-md bg-secondary text-white me-2'
                        disabled={count === 0 ? true : false}
                        onClick={() => this.setState({ count: this.state.count - 1 })}>
                        <h5>-</h5>
                    </button>
                    <button onClick={()=> ''} className='btn btn-md bg-danger text-white'><h5>Delete</h5></button>
                </div>
            </div>
        )
    }
}


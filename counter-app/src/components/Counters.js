import React, { Component } from 'react'
import Counter from './Counter'

class Counters extends Component {

    render() {

        return (
            <div className='container p-3'>
                <button className='btn btn-lg btn-primary'>
                    Reset
                </button>
                <div className='main'>
                    <Counter />
                    <Counter />
                    <Counter />
                    <Counter />
                    <Counter />
                </div>
            </div>
        )
    }


}

export default Counters




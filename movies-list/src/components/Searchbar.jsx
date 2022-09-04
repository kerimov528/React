import React, { Component } from 'react'

export default class Searchbar extends Component {

  handleSubmit = (e)=> {
     e.preventDefault();
  }
  render() {

    const { searchMovieProp } = this.props

    return (
      <div className='container'>
        <div className="row">
          <div className="col-lg-12 my-4">
            <form onSubmit={this.handleSubmit}>
              <input type="text" className="form-control"
                placeholder='Search Movie'
                onChange={searchMovieProp}
              />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

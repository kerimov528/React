import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Searchbar extends Component {

  handleSubmit = (e)=> {
     e.preventDefault();
  }
  render() {

    const { searchMovieProp } = this.props

    return (
      <div className='container px-4'>
        <div className="row px-4">
          <div className="col-lg-10 my-4 px-0">
            <form onSubmit={this.handleSubmit}>
              <input type="text" className="form-control"
                placeholder='Search Movie'
                onChange={searchMovieProp}
              />
            </form>
          </div>
          <div className="col-lg-2 my-4 text-center px-0">
            <Link type='button' className="btn btn-danger" to={'/add'}>Add Movie</Link>
          </div>
        </div>
      </div>
    )
  }
}

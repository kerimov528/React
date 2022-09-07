import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../css/movies.css'

export default class Movies extends Component {

  render() {
    
    const { movies, deleteItemProp } = this.props

    return (
      <div className='container p-5'>
        <div className="row">
          {movies.map((movie) => {
            return (
              <div className="col-sm-6 col-lg-4" key={movie.id}>
                <div className="card mb-5 shadow-sm">
                  <img src={movie.imageURL}alt="Movie" className="card-imp-top rounded img-thumbnail" />
                  <div className="card-body">
                    <h5 className='card-title'>{movie.name}</h5>
                    <p className='card-text pb-4'>{movie.overview}</p>
                    <div className="footer bg-white py-2 d-flex justify-content-between align-items-center position-absolute bottom-0 start-0 px-3">
                      <div>
                      <button className='btn btn-md btn-outline-danger' onClick={(e)=>  deleteItemProp(movie)}>Delete</button>
                      <Link type='button' className='btn btn-outline-primary ms-2' to={`edit/${movie.id}`} onClick={(e) => localStorage.setItem("id",movie.id)}>Edit</Link>
                      </div>
                      <h3 className='m-0 p-0'><span className="badge bg-info">{movie.rating}</span></h3>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

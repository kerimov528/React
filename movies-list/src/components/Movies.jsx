import React, { Component } from 'react'
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
                  <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}alt="Movie" className="card-imp-top rounded img-thumbnail" />
                  <div className="card-body">
                    <h5 className='card-title'>{movie.title}</h5>
                    <p className='card-text pb-4'>{movie.overview}</p>
                    <div className="footer bg-white py-3 d-flex justify-content-around align-items-center position-absolute">
                      <button className='btn btn-md btn-outline-danger' onClick={(e)=>  deleteItemProp(movie)}>Delete</button>
                      <h2 className='m-0 p-0'><span className="badge bg-info">{movie.vote_average}</span></h2>
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

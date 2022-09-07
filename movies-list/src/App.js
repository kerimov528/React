import React, {
  Component
} from 'react'
import Movies from './components/Movies';
import Searchbar from './components/Searchbar';
import axios from 'axios'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddMovie from './components/AddMovie'
import EditMovie from './components/EditMovie';

class App extends Component {
  state = {
    movies: [],
    searchQuery: ""
  }

  //Delete a Movie
  deleteItems = async (movie) => {
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id)
    await axios.delete(`http://localhost:2002/movies/${movie.id}`)

    this.setState({
      movies: newMovieList
    })
  }

  editMovie = async (id, movie) => {
    await axios.put(`http://localhost:2002/movies/${id}`, movie)
    this.getMovies();
  }
  //Searching Movie
  searchMovie = (e) => {
    this.setState({ searchQuery: e.target.value })
  }

  //Adding Movie
  addMovie = async (movie) => {
    await axios.post('http://localhost:2002/movies', movie)

    this.setState(state => ({
      movies: state.movies.concat([movie])
    }))

    this.getMovies();

  }

  componentDidMount = async () => {
    this.getMovies();
  }

  getMovies = async () => {
    const response = await axios.get('http://localhost:2002/movies')
    this.setState({
      movies: response.data
    })

  }


  render() {
    let filteredMovie = this.state.movies.filter(
      movie => {
        return movie.name.toLowerCase().includes(this.state.searchQuery.toLowerCase()) !== false
      }
    ).sort((a, b) => {
      return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
    })
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/'
            element={
              <React.Fragment>
                <Searchbar
                  searchMovieProp={this.searchMovie}
                />
                <Movies
                  movies={
                    filteredMovie
                  }

                  deleteItemProp={
                    this.deleteItems
                  }
                />
              </React.Fragment>
            } />
          <Route path='/add' element={
            <AddMovie onAddMovie={(movie) => this.addMovie(movie)} />
          } />
          <Route path='/edit/:id' element={
            <EditMovie onEditMovie={this.editMovie} />
          } />
        </Routes>
      </BrowserRouter>
    )
  }
}


export default App;
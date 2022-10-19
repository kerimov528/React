import React, {
  Component
} from 'react'
import Movies from './components/Movies';
import Searchbar from './components/Searchbar';
import axios from 'axios'

class App extends Component {
  state = {
    movies: [],
    searchQuery: ""
  }

  deleteItems = (movie) => {
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id)

    this.setState({
      movies: newMovieList
    })
  }

searchMovie = (e)=> {
  this.setState({searchQuery: e.target.value})
}

componentDidMount = async () => {
  const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=83232293ed419aee539ae79d1a4f2e05&language=en-US&page=1')

  this.setState({
    movies: response.data.results
  })
}


  render() {
    let filteredMovie = this.state.movies.filter(
      movie => {
        return movie.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()) !== false
      }
    )
    return (

      <div >
      <Searchbar 
      searchMovieProp = {this.searchMovie}
      />
      <Movies movies = {
        filteredMovie
      }
      deleteItemProp = {
        this.deleteItems
      }
      /> 
      </div>
    )
  }
}


export default App;
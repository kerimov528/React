import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import Words from '../Quizs/Words'
import Favourite from '../Favourite/Fovourite'
import EditWords from '../Editword/Editwords'
import Revise from '../Revise/Revise'
import Learned from '../Learned/Learned'
import PageNotFound from '../PageNotFound/PageNotFound.js'
import './App.css'

function App() {
  return (
    
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Words />} />
          <Route path='/favourite' element={<Favourite />} />
          <Route path='/editwords/:id' element={<EditWords />} />
          <Route path='/revise-later/' element={<Revise />} />
          <Route path='/*' element={<PageNotFound />} />
          <Route path='/learned' element={<Learned/>}/>
        </Routes>
      </Router>
  );
}

export default App;

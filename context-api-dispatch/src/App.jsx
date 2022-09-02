import React, { Component } from 'react'
import Navbar from './componenets/Navbar';
import Users from './componenets/Users';

class App extends Component {


  render() {
    return (
      <div>
        <Navbar />
        <hr />
        <Users />
      </div>
    )
  }
}

export default App;

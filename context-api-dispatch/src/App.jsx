import React, { Component } from 'react'
import Navbar from './componenets/Navbar';
import Users from './componenets/Users';
import AddUser from './componenets/AddUser'

class App extends Component {


  render() {
    return (
      <div>
        <Navbar />
        <hr />
        <AddUser/>
        <Users />
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import UserList from "./components/UserList";

class App extends Component {
  render() {
    return (
    <div className="container">
      <div className="h2 text-center my-4">Netijen</div>
      
      <UserList/>
    </div>
    )
  }
}

export default App;

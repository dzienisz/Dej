import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import './App.css';

class App extends Component {
  signOut = () => {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div className="App">
        <button
          className="btn btn-danger"
          onClick={this.signOut}
        >
          Sign Out
        </button>
      </div>
    );
  }
}

export default App;

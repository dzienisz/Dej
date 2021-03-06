import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

import './App.css';

class App extends Component {
  signOut = () => {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div className="App">
        <h3>Dej - Lista zakupów</h3>
        <AddGoal />
        <hr />
        <h4>Lista</h4>
        <GoalList />
        <hr />
        <h4>Kupione</h4>
        <CompleteGoalList />
        <hr />
        <button
          className="btn btn-danger"
          onClick={this.signOut}
        >
          Wyloguj
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, null)(App);

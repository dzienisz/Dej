import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setGoals } from '../../actions';
import { goalRef } from '../../firebase';

class GoalList extends Component {
    componentDidMount() {
        goalRef.on('value', snap => {
            let goals = [];
            snap.forEach(goal => {
                const { email, title } = goal.val();
                goals.push({ email, title });
            })
            this.props.setGoals(goals);
        })
    }

    render() {
        return (
            <div>
                Lista zakupów
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { goals } = state;
    return {
        goals
    }
}

export default connect(mapStateToProps, { setGoals })(GoalList);
import React, { Component } from 'react';
import './style.css';

class GoalItem extends Component {
    render() {
        const { email, title} = this.props.goal;
        return (
            <div className="goal">
                <strong>{title}</strong>
                <span> submitted by <em>{email}</em></span>
            </div>
        )
    }
}

export default GoalItem;
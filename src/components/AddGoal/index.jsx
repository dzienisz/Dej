import React, { Component } from 'react';
import { connect } from 'react-redux'
import { goalRef } from '../../firebase';

class AddGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    addGoal = () => {
        const { title } = this.state;
        const { email } = this.props;
        goalRef.push({email, title})
    }

    render() {
        return (
            <div className="form-inline">
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Dodaj zakup"
                        className="form-control"
                        style={{marginRight: '5px'}}
                        onChange={event => this.setState({title: event.target.value})}
                    />
                    <button
                        className="btn btn-success"
                        type="button"
                        onClick={this.addGoal}                        
                    >
                        Wyślij
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user: { email }  } = state;
    console.log(state);
    return {
        email
    }
}

export default connect(mapStateToProps, null)(AddGoal);
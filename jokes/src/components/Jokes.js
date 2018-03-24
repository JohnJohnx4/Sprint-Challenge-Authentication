import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../actions';
import '../styles/jokes.css';

class Jokes extends Component {
    componentDidMount() {
        this.props.getJokes();
    }

    render() {
        return (
            <ul className="jokes__container">
                {this.props.jokes.map((joke, i) => {
                    return (
                        <div className="jokes__card" key={i}>
                            <div className="jokes__type">{joke.type.charAt(0).toUpperCase() + joke.type.slice(1) + ' joke'}</div>
                            <div className="jokes__setup">{joke.setup}</div>
                            <div className="jokes__punchline">{joke.punchline}</div>
                        </div>
                    )
                })}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
      jokes: state.jokes
    };
  };
  
export default connect(mapStateToProps, { getJokes })(Jokes);
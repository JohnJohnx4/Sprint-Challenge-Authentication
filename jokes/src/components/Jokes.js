import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../actions';

class Jokes extends Component {
    componentDidMount() {
        this.props.getJokes();
    }

    render() {
        return (
            <ul>
                {this.props.jokes.map((joke, i) => {
                    return (
                        <div key={i}>
                            <div>{joke.type}</div>
                            <div>{joke.setup}</div>
                            <div>{joke.punchline}</div>
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
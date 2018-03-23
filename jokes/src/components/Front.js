import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Frontpage extends Component {
    getLinks() {
        if (this.props.authenticate) {
            return (
                <li>
                    <Link to="/signout">Sign Out</Link>
                </li>
            );
        }
        return (
            <div>
                <li key={1}>
                    <Link to="/signin">Sign In</Link>
                </li>
                <li key={2}>
                    <Link to="/signup">Sign Up</Link>
                </li>
            </div>
        );
    }
    
    render() {
        return(
            <div>
                <Link to="/">Joke Homepage</Link>
                <div>{this.getLinks()}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        authenticated: state.auth.authenticated
    };
};

export default connect(mapStateToProps)(Frontpage);
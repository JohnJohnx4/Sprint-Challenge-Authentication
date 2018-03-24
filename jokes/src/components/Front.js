import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/front.css';

class Frontpage extends Component {
    getLinks() {
        if (this.props.authenticated) {
            return (
                <Link to="/signout">
                <button className="front__buttons">
                    Sign Out
                </button>
                </Link>
            );
        }
        return (
            <div >
                    <Link className="front__link" to="/signin">
                <button className="front__buttons" key={1}>
                    Sign In
                </button>
                    </Link>
                    <Link className="front__link" to="/signup">
                <button  className="front__buttons"key={2}>
                    Sign Up
                </button>
                    </Link>
            </div>
        );
    }
    
    render() {
        return(
            <div className="front__header">
                <Link className="front__link-header" to="/">Jokes Homepage</Link>
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
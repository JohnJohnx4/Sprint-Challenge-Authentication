import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ComposedComponent => {
    class RequiredAuth extends Component {
        componentWillMount() {
            if (!this.props.authenticated) this.props.history.push('/signin');
        }
        
        render() {
        if (!this.props.authenticated) return null;
        else  return <ComposedComponent />;
        }
        
    }
    
    const mapStateToProps = state => {
        return {
            authenticated: state.auth.authenticated
        };
    };
    
    return connect(mapStateToProps)(RequiredAuth);
};
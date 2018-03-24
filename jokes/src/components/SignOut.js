import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions';
import '../styles/signout.css';

class SignOut extends Component {
  componentWillMount() {
    this.props.logout(this.props.history);
  }

  render() {
    return <div className="signout">You have signed out</div>;
  }
}

export default connect(null, { logout })(SignOut);
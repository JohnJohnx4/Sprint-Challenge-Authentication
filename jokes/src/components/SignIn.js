import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { login } from '../actions';
import { connect } from 'react-redux';
import '../styles/signin.css';

class SignIn extends Component {
    handleFormSubmit({ username, password }) {
      this.props.login(username, password, this.props.history);
    }
  
    renderAlert() {
      if (!this.props.error) return null;
      return <h3>{this.props.error}</h3>;
    }
  
    render() {
      const { handleSubmit } = this.props;
  
      return (
        <form className="signin__form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset className="signin__container">
            <label className="signin__label">Username:</label>
            <Field className="signin__field" name="username" component="input" type="text" />
          </fieldset>
          <fieldset className="signin__container">
            <label className="signin__label">Password:</label>
            <Field className="signin__field" name="password" component="input" type="password" />
          </fieldset>
          <button className="signin__button" action="submit">Sign In</button>
          {this.renderAlert()}
        </form>
      );
    }
  }
  
  const mapStateToProps = state => {
    return {
      error: state.auth.error,
      authenticated: state.auth.authenticated
    };
  };
  
  SignIn = connect(mapStateToProps, { login })(SignIn);
  
  export default reduxForm({
    form: 'signin',
    fields: ['username', 'password']
  })(SignIn);
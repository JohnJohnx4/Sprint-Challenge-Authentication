import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { register } from '../actions';
import '../styles/signup.css';

class SignUp extends Component {
    handleFormSubmit({ username, password, confirmPassword }) {
        this.props.register(username, password, confirmPassword, this.props.history);
    }
    
    renderAlert = () => {
        if (!this.props.error) return null;
        return <h3>{this.props.error}</h3>
    };

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="signup__form">
                <form className="signup__form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <fieldset className="signup__container">
                        <label className="signup__label">Username:</label>
                        <Field className="signup__field" name="username" component="input" type="text" />
                    </fieldset>
                    <fieldset className="signup__container">
                    <label className="signup__label">Password:</label>
                        <Field className="signup__field" name="password" component="input" type="password" />
                    </fieldset>
                    <fieldset className="signup__container">
                    <label className="signup__label">Confirm Password:</label>
                        <Field className="signup__field" name="confirmPassword" component="input" type="password" />
                    </fieldset>
                    <button className="signup__button" action="submit">Confirm</button>
                    {this.renderAlert()}
                </form>
            </div>
        );
    }
    
}

const mapStateToProps = state => {
    return {
        error: state.auth.error
    };
};

SignUp = connect(mapStateToProps, { register })(SignUp);

export default reduxForm({
    form: 'signup',
    fields: ['username', 'password', 'confirmPassword'],
})(SignUp);
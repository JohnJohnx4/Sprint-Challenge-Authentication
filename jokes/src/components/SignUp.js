import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { register } from '../actions';

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
            <div classname="signup__form">
                <div>Sign Up</div>
                <form onSubmit ={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <fieldset>
                        <label>Username:</label>
                        <Field name="username" component="input" type="text" placeholder="Username" />
                    </fieldset>
                    <fieldset>
                        <label>Password:</label>
                        <Field name="password" component="input" type="password" placeholder="Password" />
                    </fieldset>
                    <fieldset>
                        <label>Confirm Password:</label>
                        <Field name="confirmPassword" component="input" type="password" placeholder="Confirm Password" />
                    </fieldset>
                    <button action="submit">Confirm</button>
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
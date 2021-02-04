import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class SignUpForm extends Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props
    return (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username</label>
              <div>
                <Field name="username" component="input" type="text"/>
              </div>
            </div>
            <div>
              <label>Password</label>
              <div>
                <Field name="password" component="input" type="text"/>
              </div>
            </div>
            <div>
              <button type="submit" disabled={pristine || submitting}>Submit</button>
            </div>
          </form>
        )
      }
}

// Decorate the form component
SignUpForm = reduxForm({
  form: 'signup' // a unique name for this form
})(SignUpForm);

export default SignUpForm;
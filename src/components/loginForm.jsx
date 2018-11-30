import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';

class LoginForm extends Form {
  state = {
    data: {
      username: '',
      password: ''
    },
    errors: {}
  };

  // Schema
  schema = {
    username: Joi.string()
      .required()
      .label('Username'),
    password: Joi.string()
      .required()
      .label('Password')
  };

  doSubmit = () => {
    console.log('Submitted!');
  };

  render() {
    return (
      <div
        className="row justify-content-center align-items-center"
        style={{ minHeight: 'calc(100vh - 90px)' }}
      >
        <div className="col-lg-5">
          <form onSubmit={this.handleSubmit}>
            {this.renderInput('username', 'Username')}
            {this.renderInput('password', 'Password', 'password')}
            {this.renderButton('Login')}
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;

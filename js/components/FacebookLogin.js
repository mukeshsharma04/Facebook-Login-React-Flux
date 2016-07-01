import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import FacebookActionCreators from '../actions/FacebookActionCreator.js';
import B_CONST from '../../constants/BaseConstants.js'

export class FacebookLogin extends React.Component {
  render() {
    return (
      <Button className="btn btn-primary" ref="loginButton" onClick={this.didClickFacebookLoginButton}>Login to facebook</Button>
    );
  }

  didClickFacebookLoginButton (e){
    FacebookActionCreators.login();
  }
}

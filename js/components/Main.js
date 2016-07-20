import React from 'react';
import FacebookActionCreators from '../actions/FacebookActionCreator.js';
import FacebookStore from '../stores/FacebookStore.js';
import {FacebookLogin} from './FacebookLogin.js';
import LeftSideBar from './LeftBar.js';

class Main extends React.Component {
  constructor(props) {
      super();
      this.state = this.getFacebookState();
  }
    getFacebookState () {
      return{
        accessToken: FacebookStore.accessToken,
        loggedIn: FacebookStore.loggedIn,
        userId: FacebookStore.userId,
        userPicture : FacebookStore.userPicture,
        userProfile : FacebookStore.userProfileData()
      }
    }

    componentDidMount() {
        FacebookActionCreators.initFacebook();
        FacebookStore.addChangeListener(() => this._onFacebookChange());

    }

    componentWillUnmount() {
        FacebookStore.removeChangeListener(this._onFacebookChange);
      }

    _onFacebookChange() {
        this.setState(this.getFacebookState());
    }

    render() { 
        return (
            <div className="col-md-12">
              {(!this.state.loggedIn) ? <FacebookLogin /> : <LeftSideBar profile={this.state.userProfile} picture={this.state.userPicture}/>}
            </div>
        );
    }
}

export default Main;

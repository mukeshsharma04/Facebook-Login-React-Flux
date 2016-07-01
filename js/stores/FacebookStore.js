import B_CONST from '../../constants/BaseConstants.js';
import MainDispatcher from '../dispatchers/MainDispatcher.js';
import {EventEmitter} from 'events';

const FACEBOOK_CHANGE_EVENT = 'FACEBOOK_CHANGE_EVENT';

class FacebookStore extends EventEmitter {
  constructor () {
    super()
    this.facebookAuthData = {};
    this.facebookProfileData = {};
  }

  setFacebookAuthData(data) {
    this.facebookAuthData = data;
    this.emitChange();
  }

  setFacebookUserProfileData(data) {
    this.facebookProfileData = data;
    this.emitChange();
  }

  get loggedIn() {
    if (!this.facebookAuthData) {
      return;
    }

    return this.facebookAuthData.status == 'connected';
  }

  get userId() {
    if (!this.facebookAuthData || !this.facebookAuthData.authResponse) {
      return;
    }

    return this.facebookAuthData.authResponse.userID;
  }

  get accessToken() {
    if (!this.facebookAuthData || !this.facebookAuthData.authResponse) {
      return;
    }

    return this.facebookAuthData.authResponse.accessToken;
  }

  get userPicture() {
    if (!this.facebookProfileData  || !this.facebookProfileData.picture) {
      return;
    }
    return this.facebookProfileData.picture.data.url;
  }

  get userName() {
    if (!this.facebookProfileData  || !this.facebookProfileData.name) {
      return;
    }
    return this.facebookProfileData.name;
  }

  get userFirstName() {
    if (!this.facebookProfileData  || !this.facebookProfileData.firstName) {
      return;
    }
    return this.facebookProfileData.first_name;
  }

  get userLastName() {
    if (!this.facebookProfileData  || !this.facebookProfileData.lastName) {
      return;
    }
    return this.facebookProfileData.last_name;
  }

  get userBirthday() {
    if (!this.facebookProfileData  || !this.facebookProfileData.birthday) {
      return;
    }
    return this.facebookProfileData.birthday;
  }

  get userGender() {
    if (!this.facebookProfileData  || !this.facebookProfileData.gender) {
      return;
    }
    return this.facebookProfileData.gender;
  }

  get userEmail() {
    if (!this.facebookProfileData  || !this.facebookProfileData.email) {
      return;
    }
    return this.facebookProfileData.email;
  }

  get userVerified() {
    if (!this.facebookProfileData  || !this.facebookProfileData.verified) {
      return;
    }
    return this.facebookProfileData.verified;
  }

  userProfileData() {
    return this.facebookProfileData;
  }

  emitChange() { 
    this.emit(FACEBOOK_CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(FACEBOOK_CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(FACEBOOK_CHANGE_EVENT, callback);
  }
}
// initialize the store as a singleton
const facebookStore = new FacebookStore();

facebookStore.dispatchToken = MainDispatcher.register((action) => {
  if (action.actionType == B_CONST.FACEBOOK_INITIALIZED) {
    facebookStore.setFacebookAuthData(action.data);

  }

  if (action.actionType ==  B_CONST.FACEBOOK_LOGGED_IN) {
    facebookStore.setFacebookAuthData(action.data);
    facebookStore.setFacebookUserProfileData(action.data);
  }
})

module.exports = facebookStore;

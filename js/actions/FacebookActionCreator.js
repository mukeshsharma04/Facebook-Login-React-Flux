import MainDispatcher from '../dispatchers/MainDispatcher.js'
import B_CONST from '../../constants/BaseConstants.js'

const APP_ID = '123658774362139'

const FacebookActionCreators = {
  initFacebook: function(){ 
    window.fbAsyncInit = function() {
    FB.init({
      appId      : APP_ID,
      cookie     : true,  // enable cookies to allow the server to access
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.5' // use graph api version 2.5
    });

  FacebookActionCreators.getLoginStatus();

  };
    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  },

   // 1. Logged into your app ('connected')
   // 2. Logged into Facebook, but not your app ('not_authorized')
   // 3. Not logged into Facebook and can't tell if they are logged into
   //    your app or not.
   //
   // These three cases are handled in the callback function.
  getLoginStatus : function(response) {
    window.FB.getLoginStatus((response) => {  
      MainDispatcher.dispatch({
        actionType : B_CONST.FACEBOOK_INITIALIZED,
        data : response
      });
    });
  },


login: () => {
    window.FB.login(  (response) => {
        if (response.status === 'connected') {
          FB.api('/me?fields=picture,age_range,birthday,id,first_name,last_name,email,gender,name,verified',
                function(res) {
                var resp = Object.assign(response, res);
                  MainDispatcher.dispatch({
                      actionType: B_CONST.FACEBOOK_LOGGED_IN,
                      data: resp
                  });

                },{scope : 'email,user_birthday'});
        }
    });
},

}
module.exports = FacebookActionCreators;

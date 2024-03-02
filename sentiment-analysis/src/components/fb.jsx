import React, { useEffect } from 'react';

const FacebookLogin = () => {
 useEffect(() => {
    window.fbAsyncInit = function() {
      FB.init({
        appId: '422084580346861',
        cookie: true,
        xfbml: true,
        version: 'v19.0'
      });

      FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
 }, []);

 function statusChangeCallback(response) {
    if (response.status === 'connected') {
      testAPI();
    } else {
      document.getElementById('status').innerHTML = 'Please log into this app.';
    }
 }

 function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
 }

 function testAPI() {
    console.log('Welcome! Fetching your information....');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
 }

 return (
    <div>
      <div id="fb-root"></div>
      <fb:login-button scope="public_profile,email,instagram_basic,instagram_manage_comments" onlogin="checkLoginState();">
      </fb:login-button>
      <div id="status">
      </div>
    </div>
 );
};

export default FacebookLogin;

// import React, { useEffect } from 'react';

// const FacebookLogin = () => {
//  useEffect(() => {
//     window.fbAsyncInit = function() {
//       FB.init({
//         appId: '422084580346861',
//         cookie: true,
//         xfbml: true,
//         version: 'v19.0'
//       });

//       FB.getLoginStatus(function(response) {
//         statusChangeCallback(response);
//       });
//     };

//     (function(d, s, id) {
//       var js, fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) return;
//       js = d.createElement(s); js.id = id;
//       js.src = "https://connect.facebook.net/en_US/sdk.js";
//       fjs.parentNode.insertBefore(js, fjs);
//     }(document, 'script', 'facebook-jssdk'));
//  }, []);

//  function statusChangeCallback(response) {
//     if (response.status === 'connected') {
//       testAPI();
//     } else {
//       document.getElementById('status').innerHTML = 'Please log into this app.';
//     }
//  }

//  function checkLoginState() {
//     FB.getLoginStatus(function(response) {
//       statusChangeCallback(response);
//     });
//  }

//  function testAPI() {
//     console.log('Welcome! Fetching your information....');
//     FB.api('/me', function(response) {
//       console.log('Successful login for: ' + response.name);
//       document.getElementById('status').innerHTML =
//         'Thanks for logging in, ' + response.name + '!';
//     });
//  }

//  return (
//     <div>
//       <div id="fb-root"></div>
//       <fb:login-button scope="public_profile,email,instagram_basic,instagram_manage_comments" onlogin="checkLoginState();">
//       </fb:login-button>
//       <div id="status">
//       </div>
//     </div>
//  );
// };

// export default FacebookLogin;


// import React, { useEffect } from 'react';

// const FacebookLogin = ({ onLoginSuccess }) => {
//  useEffect(() => {
//     window.fbAsyncInit = function() {
//       FB.init({
//         appId: '422084580346861',
//         cookie: true,
//         xfbml: true,
//         version: 'v19.0'
//       });

//       FB.getLoginStatus(function(response) {
//         statusChangeCallback(response);
//       });
//     };

//     (function(d, s, id) {
//       var js, fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) return;
//       js = d.createElement(s); js.id = id;
//       js.src = "http://connect.facebook.net/en_US/sdk.js";
//       fjs.parentNode.insertBefore(js, fjs);
//     }(document, 'script', 'facebook-jssdk'));
//  }, []);


//  function statusChangeCallback(response) {
//   if (response.status === 'connected') {
//     // User is logged in, store this state
//     localStorage.setItem('isLoggedIn', true);
//     testAPI();
//   } else {
//     // User is not logged in, remove the stored state
//     localStorage.removeItem('isLoggedIn');
//     document.getElementById('status').innerHTML = 'Please log into this app.';
//   }
// }
//  function checkLoginState() {
//     FB.getLoginStatus(function(response) {
//       statusChangeCallback(response);
//     });
//  }

//  function loginUser() {
//     FB.login(function(response) {
//       if (response.authResponse) {
//         console.log('Welcome! Fetching your information....');
//         FB.api('/me', function(response) {
//           console.log('Successful login for: ' + response.name);
//           document.getElementById('status').innerHTML =
//             'Thanks for logging in, ' + response.name + '!';
//             onLoginSuccess(response.authResponse.accessToken);
//         });
//       } else {
//         console.log('User cancelled login or did not fully authorize.');
//       }
//     }, {scope: 'public_profile,email,instagram_basic,instagram_manage_comments'});
//  }

//  function testAPI() {
//     console.log('Welcome! Fetching your information....');
//     FB.api('/me', function(response) {
//       console.log('Successful login for: ' + response.name);
//       document.getElementById('status').innerHTML =
//         'Thanks for logging in, ' + response.name + '!';
//     });
//  }
//  useEffect(() => {
//   const isLoggedIn = localStorage.getItem('isLoggedIn');
//   if (isLoggedIn) {
//     // User is logged in, proceed with your logic
//     testAPI();
//   } else {
//     // User is not logged in, prompt them to log in
//     loginUser();
//   }
// }, []);
//  return (
//     <div>
//       <div id="fb-root"></div>
//       <button onClick={loginUser}>Login with Facebook</button>
//       <div id="status">
//       </div>
//     </div>
//  );
// };

// export default FacebookLogin;


// // import React, { useState ,useContext} from 'react';
// // import { initializeApp } from 'firebase/app';
// // import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';

// // import { FbContext } from './Fbcontext';
// // // Initialize Firebase with your config
// // const firebaseConfig = {
// //   apiKey: "AIzaSyA13-WTVZ3kbSVmmLsD7OHd3XIhmwpJyNY",
// //   authDomain: "tonify-b853d.firebaseapp.com",
// //   projectId: "tonify-b853d",
// //   storageBucket: "tonify-b853d.appspot.com",
// //   messagingSenderId: "90115813353",
// //   appId: "1:90115813353:web:1b330d0cd07c63904b6578",
// //   measurementId: "G-E7VYET5XCV"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const auth = getAuth(app);

// // const FacebookLogin = () => {
// //  const [loading, setLoading] = useState(false);
// //  const { handleLoginSuccess } = useContext(FbContext); 

// //  const handleLogin = () => {
// //   setLoading(true);
// //   const provider = new FacebookAuthProvider();
// //   signInWithPopup(auth, provider)
// //   .then((result) => {
// //      // Access token is available in the stsTokenManager
// //      const accessToken = result.user.stsTokenManager.accessToken;
// //      console.log('Access Token:', accessToken);
// //      // The signed-in user info.
// //      const user = result.user;
// //      console.log('User:', user);
// //      setLoading(false);
// //   }).catch((error) => {
// //      // Handle Errors here.
// //      console.error('Error during sign-in:', error);
// //      setLoading(false);
// //   });
 
// // };

// // const handleLogin = () => {
// //   setLoading(true);
// //   const provider = new FacebookAuthProvider();
// //   signInWithPopup(auth, provider)
// //   .then((result) => {
// //       const accessToken = result.user.stsTokenManager.accessToken;
// //       console.log('Access Token:', accessToken);
// //       // Store the access token in sessionStorage
// //       sessionStorage.setItem('accessToken', accessToken);
// //       handleLoginSuccess(accessToken); // Call handleLoginSuccess with the accessToken
// //       setLoading(false);
// //   }).catch((error) => {
// //       console.error('Error during sign-in:', error);
// //       setLoading(false);
// //   });
// //   };
// //  return (
// //     <div>
// //       <button onClick={handleLogin} disabled={loading}>
// //         {loading ? 'Logging in...' : 'Login with Facebook'}
// //       </button>
// //     </div>
// //  );
// // };

// // export default FacebookLogin;
import React,{useState} from 'react';
import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import app from './firebase';
const FacebookLogin = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const [googleLogin, setGoogleLogin] = useState(false); //  state to track Google login
  const auth = getAuth(app);

  const handleLogin = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
       .then((result) => {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const token = result.user.stsTokenManager.accessToken;
          // Store the access token in sessionStorage
          sessionStorage.setItem('accessToken', token);
          // The signed-in user info.
          const user = result.user;
          console.log('User:', user);
          console.log('Token:', token);
       }).catch((error) => {
          // Handle Errors here.
          console.error('Error during sign-in:', error);
       });
 };
 
// const registerWithFb = async () => {
//   const provider = new GoogleAuthProvider();
//   try {
//     const result = await signInWithPopup(auth, provider);
//     const user = result.user;
//     console.log("User signed in with Google:", user);
//     setGoogleLogin(true);
//     setAlertMessage("You have successfully logged in!");
//   } catch (error) {
//     console.error("Error during Google Sign-In:", error.message);
//   }
// };
 return (
    <div>
      <button onClick={handleLogin}>Login with Facebook</button>
    </div>
 );
};

export default FacebookLogin;

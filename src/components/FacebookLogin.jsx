import React from 'react';
import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import app from './firebase';
import { useNavigate} from 'react-router-dom';

const FacebookLogin = () => {
  const auth = getAuth(app);
  const Navigate = useNavigate();

  const handleLogin = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
       .then((result) => {
          const token = result.user.stsTokenManager.accessToken;
          sessionStorage.setItem('accessToken', token);
          console.log('User:', result.user);
          console.log('Token:', token);
          console.log("logged in successfully")
          Navigate('/analyze'); // Navigate to the analyze page
       }).catch((error) => {
          console.error('Error during sign-in:', error);
       });
 };

 return (
    <div>
      <button onClick={handleLogin}>Login with Facebook</button>
    </div>
 );
};

export default FacebookLogin;

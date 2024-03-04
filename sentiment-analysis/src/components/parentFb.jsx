// App.js
import React, { useState } from 'react';
import FacebookLogin from './fb';
import InstagramCommentAnalyzer from "./AnalyzeFb";

const Appi = () => {
 const [accessToken, setAccessToken] = useState(null);

 const handleLoginSuccess = (token) => {
    console.log('Access Token:', token);
    setAccessToken(token);
};



 return (
   
    <div>
      <FacebookLogin onLoginSuccess={handleLoginSuccess} />
      {accessToken && <InstagramCommentAnalyzer accessToken={accessToken} />}

    </div>
   
 );
};

export default Appi;


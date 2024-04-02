import React, { useEffect, useState } from 'react';

const Oauth = () => {
 const [authenticated, setAuthenticated] = useState(false);

 useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      setAuthenticated(true);
    }
 }, []);

 const handleAuthenticate = () => {
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=2793530137453296&redirect_uri=https://sentiment-analysis-frontend-cv4q-704mbhdkv-zahraaaeds-projects.vercel.app/&response_type=code&scope=user_profile,user_media`;
    window.location.href = authUrl;
 };

 return (
    <div>
      {!authenticated ? (
        <button onClick={handleAuthenticate}>Authenticate with Instagram</button>
      ) : (
        <div>
          <h2>Authenticated</h2>
          <p>You have successfully authenticated with Instagram.</p>
        </div>
      )}
    </div>
 );
};

export default Oauth;


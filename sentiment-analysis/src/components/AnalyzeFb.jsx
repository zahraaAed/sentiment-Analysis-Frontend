import React, { useState } from 'react';
import axios from 'axios';
const InstagramCommentAnalyzer = () => {
 const [url, setUrl] = useState('');
 const [commentCount, setCommentCount] = useState(0);
 const [accessToken, setAccessToken] = useState(null); // Store the access token

 // Function to handle the login response
 const handleLoginResponse = (response) => {
    if (response.status === 'connected') {
      setAccessToken(response.authResponse.accessToken);
      // Optionally, redirect the user or update the UI to indicate a successful login
    } else {
      // Handle login failure
    }
 };

 // Function to handle the form submission
 const handleSubmit = async (event) => {
    event.preventDefault();
    const postId = extractInstagramPostId(url);
    if (!postId) {
      alert('Invalid Instagram post URL.');
      return;
    }
    if (!accessToken) {
      alert('Please log in to fetch comments.');
      return;
    }
    const comments = await fetchInstagramComments(accessToken, postId);
    analyzeComments(comments);
 };

 const extractInstagramPostId = (url) => {
    const regex = /instagram\.com\/p\/([\w-]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
 };

 const fetchInstagramComments = async (accessToken, postId) => {
    const response = await fetch(`https://graph.facebook.com/v10.0/${postId}/comments?access_token=${accessToken}`);
    const data = await response.json();
    return data.data; // This should contain the comments
 };



 const analyzeComments = async (comments) => {
     // Convert comments to a format suitable for your backend (e.g., JSON)
     const commentsData = comments.map(comment => comment.text);
     try {
         const response = await axios.post("http://localhost:4000/api/textSubmission", commentsData, {
             headers: {
                 'Content-Type': 'application/json',
             },
         });
         const analysisResults = response.data;
         // Process the analysis results as needed
         console.log(analysisResults);
     } catch (error) {
         console.error('Error analyzing comments:', error);
     }
 };
 

 return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Instagram Post URL:
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        </label>
        <input type="submit" value="Analyze Comments" />
      </form>
      {commentCount > 0 && <p>The post has {commentCount} comments.</p>}
    </div>
 );
};

export default InstagramCommentAnalyzer;

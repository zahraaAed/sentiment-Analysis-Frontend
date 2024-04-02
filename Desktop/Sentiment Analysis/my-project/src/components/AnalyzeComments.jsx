import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InstagramCommentAnalyzer = () => {
  const [url, setUrl] = useState('');
  const [commentCount, setCommentCount] = useState(0);
  const [storedAccessToken, setStoredAccessToken] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem('accessToken');
    console.log("token is ",token)
    if (token) {
      setStoredAccessToken(token); // Set the token in component state
    }
  }, []);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const postId = extractInstagramPostId(url);

  //   console.log("Extracted Post ID:", postId);
  //   if (!postId) {
  //     alert('Invalid Instagram post URL.');
  //     return;
  //   }
  //   if (!storedAccessToken) {
  //     alert('Please log in to fetch comments.');
  //     return;
  //   }
  //   try {
  //     const comments = await fetchInstagramComments(postId, storedAccessToken);
  //     setCommentCount(comments.length);
  //     analyzeComments(comments);
  //   } catch (error) {
  //     console.error('Error fetching Instagram comments:', error.message);
  //     if (error.response) {
  //       console.error('Error response:', error.response.data);
  //     }
  //   }
  // };
// Assuming you have the access token stored in a variable named accessToken

const handleSubmit = async (event) => {
  event.preventDefault();
  const postId = extractInstagramPostId(url);
 
  console.log("Extracted Post ID:", postId);
  if (!postId) {
    alert('Invalid Instagram post URL.');
    return;
  }
  if (!storedAccessToken) {
    alert('Please log in to fetch comments.');
    return;
  }
  try {
    const accessToken = "EAAFZC4jl6CZB0BO4HguajUB7ZCeqgRGrLAbMawvDlKervNxek03a51eGsTuXkZCAmZCKfAHP4cJrPm2bPa78GP7Xz96uMM5eP02690v9wYM7bXJVoWXvOCRPEns6Yd3DKNm6z2Xszg8ZAf0OcmjhnZC9vHAVgAvQtBDhjDyn8nP3pdmvupNCSXBw4LX1WfN8oePAo2sC3m16Ec6D3ey2xvo2u5KIwZDZD";

    const comments = await fetchInstagramComments(postId, accessToken); // Pass accessToken here
    setCommentCount(comments.length);
    analyzeComments(comments);
  } catch (error) {
    console.error('Error fetching Instagram comments:', error.message);
    if (error.response) {
        console.error('Error response:', error.response.data);
    }
  }
};

  const extractInstagramPostId = (url) => {
    const regex = /instagram\.com\/p\/([\w-]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const fetchInstagramComments = async (postId, token) => {
    try {
      const response = await axios.get(`https://graph.facebook.com/v19.0/${postId}/comments`, {
        params: {
          access_token: token
        },
      });
      console.log(response.data);
      // Return the comments data
      return response.data.data; // Assuming response.data.data contains the comments
    } catch (error) {
      console.error('Error fetching Instagram comments:', error.message);
      throw error; // Rethrow the error to be caught in handleSubmit
    }
  };

  const analyzeComments = async (comments) => {
    const commentsData = comments.map(comment => comment.message);
    try {
      const response = await axios.post("https://sentiment-analysis-backend-2-jmtz.onrender.com/api/textSubmission", { commentsData }, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const analysisResults = response.data;
      console.log(analysisResults);
    } catch (error) {
      console.error('Error analyzing comments:', error.message);
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

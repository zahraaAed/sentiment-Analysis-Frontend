import React, { useState,useContext,useEffect } from 'react';
import axios from 'axios';
import { FbContext } from './Fbcontext';
const InstagramCommentAnalyzer = () => {
  // const authFbContext = useContext(FbContext);
  // const { accessToken } = useContext(FbContext);
  const AccessToken = sessionStorage.getItem('accessToken');

  const [storedAccessToken, setStoredAccessToken] = useState(null);
  console.log("accessToken",AccessToken)
 const [url, setUrl] = useState('');
 const [commentCount, setCommentCount] = useState(0);

console.log(AccessToken);
useEffect(() => {
  // Retrieve the access token from sessionStorage
  const token = sessionStorage.getItem('accessToken');
  setStoredAccessToken(token);
}, []);

console.log("accessToken from sessionStorage 2:", AccessToken);
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
      const comments = await fetchInstagramComments(storedAccessToken, postId);
      setCommentCount(comments.length); // Update the comment count
      analyzeComments(comments);
    } catch (error) {
      console.error('Error fetching Instagram comments:', error);
      if (error.response) {
          console.error('Error response:', error.response.data);
      }
      throw error;
  }
  
 };
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
//     // Ensure fetchInstagramComments returns the comments data
//     const comments = await fetchInstagramComments(postId, storedAccessToken);
//     setCommentCount(comments.length); // Update the comment count
//     analyzeComments(comments);
//     console.log(comments)
//   } catch (error) {
//     console.error('Error fetching Instagram comments:', error);
//     if (error.response) {
//         console.error('Error response:', error.response.data);
//     }
//     throw error;
// }
// };
 
 const extractInstagramPostId = (url) => {
    const regex = /instagram\.com\/p\/([\w-]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
 };
//  const fetchInstagramComments = async (storedAccessToken, postId) => {
//   const requestUrl = `https://graph.facebook.com/v19.0/${postId}/comments?access_token=${storedAccessToken}`;
//   console.log("Request URL:", requestUrl);
//   try {
//      const response = await axios.get(requestUrl);
//      return response.data.data; // This should contain the comments
//   } catch (error) {
//      console.error('Error fetching Instagram comments:', error.message);
//      throw error; // Rethrow the error to be caught in handleSubmit
//   }
//  };
 
// const fetchInstagramComments = async (postId, accessToken) => {
//   try {
//      const response = await axios.get(`https://graph.facebook.com/v19.0/${postId}/comments`, {
//        params: {
//          access_token: accessToken
//        },
     
//      });
//      console.log(response.data);
//   } catch (error) {
//      console.error('Error fetching Instagram comments:', error);
//   }
//  };
// const fetchInstagramComments = async (postId, accessToken) => {
//   try {
//       const response = await axios.get(`https://graph.facebook.com/v19.0/${postId}/comments`, {
//         params: {
//           access_token: accessToken
//         },
//       });
//       console.log(response.data);
//       // Return the comments data
//       return response.data.data; // Assuming response.data.data contains the comments
//   } catch (error) {
//       console.error('Error fetching Instagram comments:', error);
//       throw error; // Rethrow the error to be caught in handleSubmit
//   }
//  };
function fetchInstagramComments(postId) {
  FB.api(
      `/${postId}/comments`,
      'GET',
      {"fields":"id,message"},
      function(response) {
          if (response && !response.error) {
              console.log(response);
              // Here, you can analyze the comments as per your requirements
          } else {
              console.error('Error fetching Instagram comments:', response.error);
          }
      }
  );
}

 

 const analyzeComments = async (comments) => {
    const commentsData = comments.map(comment => comment.text);
    try {
      const response = await axios.post("https://sentiment-analysis-backend-2-jmtz.onrender.com/api/textSubmission", {commentsData},    {
        withCredentials: true,
      }, {
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

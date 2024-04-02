import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

function App() {
  const [userId, setUserId] = useState(null);
  const [roomId, setRoomId] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://sentiment-analysis-backend-2-jmtz.onrender.com/api/user', {
          withCredentials: true,
        });
        console.log("Response:", response);
        if (response.status ===  200) {
          const userData = response.data[0]; // Assuming the first item is the user
          console.log("User Data:", userData);
          setUserId(userData.userId);
          setRoomId(userData.roomId);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const connectToWebSocket = () => {
      if (userId) {
        const newSocket = io('https://sentiment-analysis-backend-2-jmtz.onrender.com', {
          withCredentials: true,
        });

        newSocket.on('connect', () => {
          console.log('WebSocket connection established');
          newSocket.emit('user connected', { userId });
        });

        newSocket.on('receive message', (receivedMessage) => {
          console.log('Received message:', receivedMessage);
          setMessages(prevMessages => [...prevMessages, receivedMessage]);
        });

        setSocket(newSocket);

        return () => {
          newSocket.close();
        };
      }
    };

    fetchUserData();
    connectToWebSocket();
  }, [userId]); // Depend on userId to re-run the effect when userId changes

  const sendMessage = () => {
    if (!socket || !message) return;
    socket.emit('send message', { userId, roomId, content: message });
    setMessage('');
  };

  return (
    <div className="App">
      <h1>Live Chat</h1>
      <div>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message" />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        {messages.map((msg, index) => (
          <p key={index}><strong>User {msg.userId}:</strong> {msg.content}</p>
        ))}
      </div>
    </div>
  );
}

export default App;

  // useEffect(() => {
  //   const fetchFeedbacks = async () => {
  //     try {
  //       const response = await axios.get("https://sentiment-analysis-backend-2-jmtz.onrender.com/api/feedback", {
  //         withCredentials: true,
  //       });
  //       setFeedbacks(response.data);
  //       console.log("Feedbacks fetched successfully");
  //     } catch (error) {
  //       console.error("Error fetching feedbacks:", error.message);
  //     }
  //   };
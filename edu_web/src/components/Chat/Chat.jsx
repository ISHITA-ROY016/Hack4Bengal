import React, { useEffect, useState } from "react";
import { handleSocketConnect } from "socket.io-client";
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Fetch initial messages
    fetchMessages();
    // Connect to WebSocket
    const newSocket = new WebSocket("ws://localhost:8000/real_time_chat/"); // Replace with your WebSocket URL
    newSocket.onopen = handleSocketConnect;
    newSocket.onclose = handleSocketDisconnect;
    newSocket.onmessage = handleSocketMessage;
    setSocket(newSocket);

    // Clean up WebSocket connection
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

  

  const fetchMessages = async () => {
    try {
      const response = await fetch("http://localhost:8000/real_time_chat/messages"); // Replace with your API endpoint
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSocketConnect = () => {
    console.log("WebSocket connected");
  };

  const handleSocketDisconnect = () => {
    console.log("WebSocket disconnected");
  };

  const handleSocketMessage = (event) => {
    const message = JSON.parse(event.data);
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/real_time_chat/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: newMessage }),
      });
      const data = await response.json();
      console.log(data); // Optional: Handle response
      setNewMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Chat</h1>
      <div>
        {messages.map((message) => (
          <p key={message.id}>{message.text}</p>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
import React from "react";
import axios from "axios";
import { useEffect } from "react";

const ChatPage = () => {
  const fetchChats = async () => {
    console.log("Hello");
    const data = await axios.get("/api/chat");
    console.log(data);
  };
  useEffect(() => {
    fetchChats();
  }, []);
  return <div>Chat Page</div>;
};

export default ChatPage;

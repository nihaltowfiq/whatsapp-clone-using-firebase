import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./ChatBar.scss";
import MicIcon from "@material-ui/icons/Mic";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useParams } from "react-router-dom";
import db from "../FirebaseFiles/firebase";
import { useStateValue } from "../FirebaseFiles/StateProvider";
import firebase from "firebase";

const ChatBar = () => {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState([]);
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomName(snapshot.data().name);
        });

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())));
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  const handleSendMessage = (e) => {
    e.preventDefault();

    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat-headerInfo">
          <h3>{roomName}</h3>
          <p>last seen at...</p>
        </div>
        <div className="chat-headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
        {messages.map((message, index) => (
          <p key={index} className={`chat-messages ${true && "chat-receiver"}`}>
            <span className="chat-name">{message.name}</span>
            {message.message}
            <span className="chat-time">{new Date(message.timestamp?.toDate()).toUTCString()}</span>
          </p>
        ))}
      </div>
      <div className="chat-footer">
        <InsertEmoticonIcon />
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" type="text" />
          <button onClick={handleSendMessage}>send message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default ChatBar;

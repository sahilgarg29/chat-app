import React from "react";
import styles from "./chatUser.module.css";
import Avatar from "../Avatar";

const ChatUser = ({ name, lastMessage }) => {
  return (
    <div className={styles.chatUserBox}>
      <Avatar />
      <div>
        <h2>{name}</h2>
        <p>{lastMessage}</p>
      </div>
    </div>
  );
};

export default ChatUser;

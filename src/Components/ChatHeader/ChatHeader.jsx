import React from "react";
import Avatar from "../Avatar";
import styles from "./chatHeader.module.css";

const ChatHeader = ({ Title }) => {
  return (
    <div className={styles.chatHeaderBox}>
      <Avatar />
      <p>{Title}</p>
    </div>
  );
};

export default ChatHeader;

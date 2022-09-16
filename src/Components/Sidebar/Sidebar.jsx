import React from "react";
import SidebarHeader from "../SidebarHeader";
import styles from "./sidebar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import ChatUser from "../ChatUser";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SidebarHeader />
      <div className={styles.searchBoxOuter}>
        <div className={styles.searchBox}>
          <AiOutlineSearch />
          <input type="text" name="search" id="search" />
        </div>
      </div>

      <div className={styles.users}>
        <ChatUser name="Sahil Garg" lastMessage="Hi...." />
        <ChatUser name="Sahil Garg" lastMessage="Hi...." />
        <ChatUser name="Sahil Garg" lastMessage="Hi...." />
        <ChatUser name="Sahil Garg" lastMessage="Hi...." />
      </div>
    </div>
  );
};

export default Sidebar;

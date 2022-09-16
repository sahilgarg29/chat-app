import React from "react";
import styles from "./sidebarHeader.module.css";
import Avatar from "../Avatar";

const SidebarHeader = () => {
  return (
    <div className={styles.shContainer}>
      <Avatar />
    </div>
  );
};

export default SidebarHeader;

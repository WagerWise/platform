"use client";
import { styles } from "./styles";
import { useState } from "react";

const Avatar = (props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={props.style}>
      <div
        className="transition-3"
        style={{
          ...styles.avatarHello,
          ...{ opacity: hovered ? `1` : `0` },
        }}
      >
        Need Help? Contact Us
      </div>
      <div
        className="transition-3"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => props.onClick && props.onClick()}
        style={{
          ...styles.chatWithMeButton,
          ...{ border: hovered ? `1px solid #FFD700` : `4px solid #FFD700` },
        }}
      ></div>
    </div>
  );
};

export default Avatar;

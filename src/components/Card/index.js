import React from "react";
import Styles from "./style.module.css";

export default function Card({ imageUrl, onClick }) {
  return (
    <div className={Styles.Card} onClick={onClick}>
      <img src={imageUrl} />
    </div>
  );
}

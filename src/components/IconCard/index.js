import React from "react";
import "./style.css";

function IconCard(props) {
  return (
    <div className="IconCard" onClick={props.onClick} id={props.id}>
      <img src={props.img} alt={props.name} />
    </div>
  );
}

export default IconCard;

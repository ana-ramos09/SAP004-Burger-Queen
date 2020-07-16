import React from "react";
import "./style.css";

const Button = (props) => {
  return <button onClick={props.handleClick} id={props.id} className={props.class}>{props.name} {props.title}</button>
}
export default Button;
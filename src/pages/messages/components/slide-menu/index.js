import React from "react";
import "./styles.css";

function Menu({ children }) {
  return (
    <div>
      <div className="menu">{children}</div>
    </div>
  );
}

function MenuItem(props) {
  return (
    <a className="menu-item" onClick={() => props.onClick && props.onClick()}>
      <span className="icon-left">{props.iconLeft}</span>
      {props.children}
      <span className="icon-right">{props.iconRight}</span>
    </a>
  );
}

export { Menu, MenuItem };

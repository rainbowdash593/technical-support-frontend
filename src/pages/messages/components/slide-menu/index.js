import React from "react";
import { CSSTransition } from "react-transition-group";
import "./styles.css";

function Menu({ children, ...rest }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <CSSTransition {...rest} timeout={500} unmountOnExit>
        <div>
          <div className="menu">{children}</div>
        </div>
      </CSSTransition>
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

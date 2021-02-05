import React from "react";
import { CSSTransition } from "react-transition-group";

export function SidebarTabComponent({ children, ...rest }) {
  return (
    <div className="sidebar-tab">
      <CSSTransition {...rest} timeout={500} unmountOnExit>
        {children}
      </CSSTransition>
    </div>
  );
}

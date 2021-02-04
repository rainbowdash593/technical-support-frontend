import React from "react";
import "./styles.scss";

export function AuthLayoutContainer({ children }) {
  return (
    <div className={"auth-layout"}>
      <div>{children}</div>
    </div>
  );
}

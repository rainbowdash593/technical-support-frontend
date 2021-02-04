import React from "react";
import { Loader } from "rsuite";
import "./styles.css";

export function Fallback() {
  return (
    <div className="fallback-loader">
      <Loader size="md" content="Loading..." />
    </div>
  );
}

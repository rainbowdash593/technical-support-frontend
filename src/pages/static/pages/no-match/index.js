import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function NoMatch() {
  return (
    <div className="no-match-wrapper">
      <div className="no-match">
        <div className="no-match__header">404</div>
        <div>
          <Link to="/">Вернуться на главную</Link>
        </div>
      </div>
    </div>
  );
}

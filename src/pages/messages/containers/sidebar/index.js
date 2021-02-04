import React from "react";
import "./styles.css";
import { ProjectListContainer } from "../projects";
import { LastTicketsContainer } from "../last-tickets";

export function MessagesSidebarContainer() {
  return (
    <div className="sidebar">
      <ProjectListContainer />
      <hr />
      <LastTicketsContainer />
    </div>
  );
}

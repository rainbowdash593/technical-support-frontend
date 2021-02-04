import React from "react";
import { SidebarContainer } from "../containers/sidenav";
import { Switch } from "react-router-dom";
import { RouteWithSubRoutes } from "../../../common/components/RouterConfiguration";

export default function DashboardPage({ routes }) {
  return (
    <div className="dashboard">
      <SidebarContainer />
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}

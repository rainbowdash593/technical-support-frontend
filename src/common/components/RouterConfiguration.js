import React, { Suspense } from "react";
import { Fallback } from "./fallback";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { observer } from "mobx-react-lite";
import authStore from "../../store/authStore";

export const RouteWithSubRoutes = observer((route) => {
  return (
    <Route
      exact={route.exact}
      path={route.path}
      render={(props) => {
        if (authStore.isLoggedIn && route.unauthenticated)
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location },
              }}
            />
          );
        return !authStore.isLoggedIn && !route.public ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        ) : (
          <route.component {...props} routes={route.routes} />
        );
      }}
    />
  );
});

export function RouterConfiguration({ routes }) {
  return (
    <Router>
      <Suspense fallback={<Fallback />}>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
}

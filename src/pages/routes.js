import React from "react";

class Defaults {
  authenticatedRoute = "/dashboard";
  unauthenticatedRoute = "/sign-in";
}
export const RouterDefaults = new Defaults();

export const routes = [
  {
    path: "/",
    component: React.lazy(() => import("./static/pages/home")),
    exact: true,
    public: true,
  },
  {
    path: "/history/:id",
    component: React.lazy(() => import("./history/view/MessageHistoryPage")),
    public: true,
  },
  {
    path: "/sign-in",
    component: React.lazy(() => import("./auth/views/SingInPage")),
    public: true,
    unauthenticated: true,
  },

  {
    path: "/dashboard",
    component: React.lazy(() => import("./dashboard/view/DashboardPage")),
    routes: [
      {
        path: "/dashboard/messages",
        component: React.lazy(() => import("./messages/view/MessagePage")),
      },
    ],
  },
  {
    path: "/404",
    component: React.lazy(() => import("./static/pages/no-match")),
    public: true,
  },
  {
    path: "*",
    component: React.lazy(() => import("./static/pages/no-match")),
    public: true,
  },
];

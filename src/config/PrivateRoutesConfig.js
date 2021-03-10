import { Roles } from "./Roles";

import {} from "components";

export default [
  {
    component: Commercial,
    path: "/c",
    title: "Commercial",
    exact: true,
    permission: [Roles.ADMIN, Roles.ACOMMERCIAL],
    children: [
      {
        component: Dashboard,
        path: "/dashboard",
        title: "Dashboard"
      },
      {
        component: Users,
        path: "/users",
        title: "Users"
      },
      {
        component: Credentials,
        path: "/credentials",
        title: "Credentials"
      }
    ]
  },
  {
    component: Press,
    path: "/p",
    title: "Press",
    exact: true,
    permission: [Roles.ADMIN, Roles.PRESS],
    children: [
      {
        component: Dashboard,
        path: "/dashboard",
        title: "Dashboard"
      },
      {
        component: Users,
        path: "/users",
        title: "Users"
      },
      {
        component: Credentials,
        path: "/credentials",
        title: "Credentials"
      }
    ]
  },
  {
    component: Security,
    path: "/s",
    title: "Security",
    exact: true,
    permission: [Roles.ADMIN, Roles.SECURITY],
    children: [
      {
        component: Dashboard,
        path: "/dashboard",
        title: "Dashboard"
      },
      {
        component: Users,
        path: "/users",
        title: "Users"
      },
      {
        component: Credentials,
        path: "/credentials",
        title: "Credentials"
      }
    ]
  }
];

/* eslint-disable react/no-array-index-key */
import React, { lazy, Suspense, Fragment } from "react"
import { Switch, Redirect, Route } from "react-router-dom"

import StaticLayout from "layouts/StaticLayout"
import LoadingScreen from "components/LoadingScreen"
import AuthGuard from "components/AuthGuard"
import GuestGuard from "components/GuestGuard"

const routesConfig = [
  {
    exact: true,
    path: "/",
    layout: StaticLayout,
    component: lazy(() => import("views/static/Landing")),
  },
  {
    exact: true,
    guard: GuestGuard,
    path: "/login",
    component: lazy(() => import("views/auth/Login")),
  },
  {
    exact: true,
    guard: GuestGuard,
    path: "/register",
    component: lazy(() => import("views/auth/Register")),
  },

  {
    path: "/app",
    // guard: AuthGuard,
    layout: StaticLayout,
    routes: [
      {
        exact: true,
        path: "/app",
        component: () => <Redirect to="/app/home" />,
      },
      {
        exact: true,
        path: "/app/home",
        component: lazy(() => import("views/app/Home")),
      },
    ],
  },
]

const renderRoutes = (routes) =>
  routes ? (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        {routes.map((route, i) => {
          const Guard = route.guard || Fragment
          const Layout = route.layout || Fragment
          const Component = route.component

          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <Guard>
                  <Layout>
                    {route.routes ? (
                      renderRoutes(route.routes)
                    ) : (
                      <Component {...props} />
                    )}
                  </Layout>
                </Guard>
              )}
            />
          )
        })}
      </Switch>
    </Suspense>
  ) : null

function Routes() {
  return renderRoutes(routesConfig)
}

export default Routes

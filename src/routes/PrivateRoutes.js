import React, { Fragment } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import { getAllowedRoutes, isLoggedIn } from "../utils/index";
import { PrivateRoutesConfig } from "../config/PrivateRoutesConfig";
import { TopNav } from "../components/common/TopNav";
import MapAllowedRoutes from "./MapAllowedRoutes";

function PrivateRoutes() {
  const match = useRouteMatch("/app");
  let allowedRoutes = [];

  if (isLoggedIn()) {
    allowedRoutes = getAllowedRoutes(PrivateRoutesConfig);
  } else {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <TopNav routes={allowedRoutes} path={match.path} className="bg-white" />
      <MapAllowedRoutes routes={allowedRoutes} basePath="/app" isAddNotFound />
    </Fragment>
  );
}

export default PrivateRoutes;

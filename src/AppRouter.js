import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

import ComercialRoutes from "./routes/CommercialRoutes";
import PressRoutes from "./routes/PressRoutes";
import SecurityRoutes from "./routes/SecurityRoutes";
import Menu from "./components/Menu";

function PrivateRoute({ children, user, category, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.category === category ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const AppRouter = ({ user }) => {
  return (
    <Router>
      <div className="col-4">
        <Menu />
      </div>
      <div className="col-8" style={{ backgroundColor: "#cfe2ff" }}>
        <Switch>
          <Route path="/login">
            <div>Logueate</div>
          </Route>
          <Route path="/p">
            <PressRoutes />
          </Route>
          <PrivateRoute user={user} category="s">
            <Route path="/s">
              <SecurityRoutes />
            </Route>
          </PrivateRoute>
          <PrivateRoute user={user} category="c">
            <Route path="/c">
              <ComercialRoutes />
            </Route>
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;

/*

*/

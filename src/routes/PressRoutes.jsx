import { Route } from "react-router-dom";

const PressRoutes = () => {
  return (
    <>
      <p>Prensa</p>
      <Route path="/p/dashboard">
        <div>dashboard </div>
      </Route>
      <Route path="/p/users">
        <div>users</div>
      </Route>
      <Route path="/p/credentials">
        <div>credentials</div>
      </Route>
    </>
  );
};

export default PressRoutes;

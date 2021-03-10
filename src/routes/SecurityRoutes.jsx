import { Route } from "react-router-dom";

const SecurityRoutes = () => {
  return (
    <>
      <p>Seguridad</p>

      <Route path="/s/dashboard">
        <div>dashboard </div>
      </Route>
      <Route path="/s/users">
        <div>users</div>
      </Route>
      <Route path="/s/credentials">
        <div>credentials</div>
      </Route>
    </>
  );
};

export default SecurityRoutes;

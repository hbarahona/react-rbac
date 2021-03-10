import { Route } from "react-router-dom";

const CommercialRoutes = () => {
  return (
    <>
      <p>Comercial</p>
      <Route path="/c/dashboard">
        <div>dashboard </div>
      </Route>
      <Route path="/c/users">
        <div>users</div>
      </Route>
      <Route path="/c/credentials">
        <div>credentials</div>
      </Route>
    </>
  );
};

export default CommercialRoutes;

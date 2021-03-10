import AppRouter from "./AppRouter";
import { useState } from "react";
const App = () => {
  const [user, setUser] = useState(false);

  const loginAsComercial = () => {
    setUser({ category: "c" });
  };

  const loginAsPrensa = () => {
    setUser({ category: "p" });
  };

  const logout = () => {
    setUser(false);
  };

  return (
    <div className="container">
      <div className="row" style={{ padding: 50 }}>
        <div className="col">
          <ul>
            <li>
              <p>User: {JSON.stringify(user, 0, 2)}</p>
            </li>
            <li>
              <button
                className={"btn btn-primary btn-sm"}
                onClick={loginAsComercial}
              >
                Comercial
              </button>
            </li>
            <li>
              <button
                className={"btn btn-primary btn-sm"}
                onClick={loginAsPrensa}
              >
                Prensa
              </button>
            </li>
            <li>
              <button className={"btn btn-primary btn-sm"} onClick={logout}>
                LOGOUT
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <AppRouter user={user} />
      </div>
    </div>
  );
};

export default App;

import { Link } from "react-router-dom";

const CommercialRoutes = () => {
  return (
    <ul>
      <li>
        <Link to="/c">Commercial</Link>
        <ul>
          <li>
            <Link to="/c/dashboard">dashboard</Link>
          </li>
          <li>
            <Link to="/c/users">users</Link>
          </li>
          <li>
            <Link to="/c/credentials">credentials</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/p">Press</Link>
        <ul>
          <li>
            <Link to="/p/dashboard">dashboard</Link>
          </li>
          <li>
            <Link to="/p/users">users</Link>
          </li>
          <li>
            <Link to="/p/credentials">credentials</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/s">Security</Link>
        <ul>
          <li>
            <Link to="/s/dashboard">dashboard</Link>
          </li>
          <li>
            <Link to="/s/users">users</Link>
          </li>
          <li>
            <Link to="/s/credentials">credentials</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default CommercialRoutes;

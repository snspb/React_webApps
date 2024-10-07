import { Link } from "react-router-dom";

const Mainnav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          SN
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsallitems"
          aria-controls="navbarsallitems"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsallitems">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <Link className="nav-link" to="/">
                Text App <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/counter">
                Counter App
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todo">
                Todo app
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Mainnav;

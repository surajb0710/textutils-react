import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">
            {props.title}
          </Link> */}
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{
              color: props.mode === "light" ? "Black" : "White",
            }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">
                  {props.element1}
                </Link> */}
                <a className="nav-link active" aria-current="page" href="/">
                  {props.element1}
                </a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.element2}
                </Link>
                <Link className="nav-link" to="/about">
                  {props.element2}
                </Link>
              </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div
              class={`form-check text-${
                props.mode === "light" ? "dark" : "light"
              } form-switch`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Change Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  element1: PropTypes.string,
  element2: PropTypes.string,

  /* Below code is to make the labels mansatory */

  // title: PropTypes.string.isRequired,
  // element1: PropTypes.string.isRequired,
  // element2: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Title",
  element1: "Element1",
  element2: "Element2",
};

export default Navbar;

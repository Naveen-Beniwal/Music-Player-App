import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ getData, keyword, setKeyword }) => {
  const handleInput = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-black text-white">
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center w-100">
          <ul className="navbar-nav d-flex align-items-center me-3">
            <li className="nav-item">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/register">
                Register
              </Link>
            </li>
          </ul>

          <input
            onChange={handleInput}
            value={keyword}
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={getData}
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";

const Navbar = ({ getData, keyword, setKeyword }) => {
  const handleInput = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black text-white">
        <div className="container-fluid">
          <div className="d-flex justify-content-center align-items-center w-100">
            <ul className="navbar-nav d-flex align-items-center me-3">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="./registration_page.html"
                >
                  Home
                </a>
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
              type="submit"
              onClick={getData}
            >
              Search
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

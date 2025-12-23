import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ setSearchQuery }) => {
  const [searchText, setSearchText] = useState("");
  // console.log(searchText);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchText);
  };

  return (
    <header className="bg-body-tertiary">
      <nav className="navbar container">
        <div className="container-fluid">
          <NavLink
            to="/"
            className="navbar-brand"
            onClick={() => {
              setSearchQuery("");
              setSearchText("");
            }}
          >
            Meetup
          </NavLink>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;

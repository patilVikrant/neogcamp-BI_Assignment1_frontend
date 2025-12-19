import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-body-tertiary">
      <nav className="navbar container">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            Meetup
          </NavLink>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
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

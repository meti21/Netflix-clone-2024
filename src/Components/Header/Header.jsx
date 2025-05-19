import NetflixLogo from "../../assets/images/Netflix_logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link } from "react-router-dom"; 

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="dark"
      variant="dark"
      className="px-3 "
    >
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img src={NetflixLogo} alt="Netflix Logo" width="100" />
        </Navbar.Brand>

        {/* Hamburger toggle */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Collapsible content */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="d-flex justify-content-between w-100 align-items-center">
            {/* Left Navigation */}
            <Nav className="me-auto gap-3">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link href="#tvshows">TV Shows</Nav.Link>
              <Nav.Link href="#movies">Movies</Nav.Link>
              <Nav.Link href="#latest">Latest</Nav.Link>
              <Nav.Link href="#mylist">My List</Nav.Link>
              <Nav.Link href="#languages">Browse by Languages</Nav.Link>
            </Nav>

            {/* Right Icons */}
            <Nav className="gap-3 align-items-center">
              <Nav.Link as={Link} to="/search">
                <SearchIcon />
              </Nav.Link>
              <Nav.Link href="#notifications">
                <NotificationsNoneIcon />
              </Nav.Link>
              <Nav.Link as={Link} to="/auth">
                <AccountBoxIcon />
              </Nav.Link>
              <NavDropdown id="account-dropdown" align="end">
                <NavDropdown.Item as={Link} to="/auth?mode=signin">
                  Sign In
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/auth?mode=register">
                 Register
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

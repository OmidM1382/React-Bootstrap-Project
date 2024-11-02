import { Navbar as NavbarBs, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../../../public/css/navbar.css";

const navLinks = [
  {
    id: 1,
    href: "/",
    content: "Home",
  },
  {
    id: 2,
    href: "/about",
    content: "About",
  },
  {
    id: 3,
    href: "/trainers",
    content: "Trainers",
  },
  {
    id: 4,
    href: "/events",
    content: "Events",
  },
  {
    id: 5,
    href: "/pricing",
    content: "Pricing",
  },
  {
    id: 6,
    href: "/contact",
    content: "Contact",
  },
];

const Navbar = () => {
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(false);
  let scrollY1 = window.scrollY;
  const handleHidden = () => {
    let scrollY2 = window.scrollY;
    if (scrollY1 < scrollY2) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };
  window.addEventListener("scroll", handleHidden);

  return (
    <>
      <header>
        <NavbarBs expand="xl" className={`${isHidden ? "hidden" : ""}`}>
          <Container>
            <NavbarBs.Brand as={Link} to="/" className="fs-3">
              MENTOR
            </NavbarBs.Brand>
            <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
            <NavbarBs.Collapse id="basic-navbar-nav">
              <Nav>
                {navLinks.map((navLink) => (
                  <Nav.Link
                    key={navLink.id}
                    as={Link}
                    to={navLink.href}
                    className={`${
                      location.pathname === navLink.href ? "active" : ""
                    }`}
                  >
                    {navLink.content}
                  </Nav.Link>
                ))}
              </Nav>
            </NavbarBs.Collapse>
          </Container>
        </NavbarBs>
      </header>
    </>
  );
};

export default Navbar;

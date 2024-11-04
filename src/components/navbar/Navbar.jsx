import { Navbar as NavbarBs, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../../../public/css/navbar.css";

const navLinks = [
  {
    href: "/",
    content: "Home",
  },
  {
    href: "/about",
    content: "About",
  },
  {
    href: "/courses",
    content: "Courses",
  },
  {
    href: "/trainers",
    content: "Trainers",
  },
  {
    href: "/events",
    content: "Events",
  },
  {
    href: "/pricing",
    content: "Pricing",
  },
  {
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
                {navLinks.map((navLink, idx) => (
                  <Nav.Link
                    key={idx}
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

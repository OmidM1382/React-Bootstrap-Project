import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { Facebook, Inspect, Instagram, Linkedin, Twitter } from "lucide-react";
import "../../../public/css/footer.css"

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row className="footer-top g-4">
            <Col md={6} lg={4} xl={4}>
              <div className="footer-about">
                <Link
                  to="/"
                  className="text-black d-flex align-items-center mb-2 fs-3"
                >
                  Mentor
                </Link>
                <div className="text-muted">
                  <p className="mb-1">A108 Adam Street</p>
                  <p className="mb-3">New York, NY 535022</p>
                  <p className="mb-1">
                    <strong>Phone:</strong>
                    <span>+1 5589 55488 55</span>
                  </p>
                  <p className="mb-0">
                    <strong>Email: </strong>
                    <span>info@example.com</span>
                  </p>
                </div>
                <div className="social-links">
                  {[
                    <Twitter size={18} />,
                    <Facebook size={18} />,
                    <Instagram size={18} />,
                    <Linkedin size={18} />,
                  ].map((_, idx) => (
                    <Link key={idx}>{_}</Link>
                  ))}
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} xl={2}>
              <div className="footer-links">
                <h4>Useful Links</h4>
                <ul>
                  {[
                    "Home",
                    "About us",
                    "Services",
                    "Terms of service",
                    "Privacy policy",
                  ].map((_, idx) => (
                    <li key={idx}>
                      <Link>{_}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col md={6} lg={4} xl={2}>
              <div className="footer-links">
                <h4>Our Services</h4>
                <ul>
                  {[
                    "Web Design",
                    "Web Development",
                    "Product Management",
                    "Marketing",
                    "Graphic Design",
                  ].map((_, idx) => (
                    <li key={idx}>
                      <Link>{_}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col md={6} lg={4} xl={4}>
              <div className="footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>
                  Subscribe to our newsletter and receive the latest news about
                  our products and services!
                </p>
                <form>
                  <div className="newsletter-form">
                    <input type="email" />
                    <input type="submit" value="Subscribe" />
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className="copyright">
            <div className="d-flex align-items-center gap-2 justify-content-center">
              <span>Copyright</span>
              <strong>Mentor</strong>
              <span>All Rights Reserved</span>
            </div>
            <div className="credits">
              <span className="me-1">Designed by</span>
              <Link>BootstrapMade</Link>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;

import { Container, Row, Col } from "react-bootstrap";
import About from "../../assets/images/about.jpg";
import { ArrowRight, CircleCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <section id="about" className="about_section">
        <Container>
          <Row className="g-4 flex-lg-row-reverse">
            <Col className="col-12 col-xl-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" data-aos-once="true">
              <img src={About} className="img-fluid" />
            </Col>
            <Col className="col-12 col-xl-6" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800" data-aos-once="true">
              <h2 className="about-title">
                Voluptatem dignissimos provident quasi corporis
              </h2>
              <p className="mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                {[
                  "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  "Duis aute irure dolor in reprehenderit in voluptate velit.",
                  "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
                ].map((_, idx) => (
                  <li key={idx}>
                    <CircleCheck size={22} />
                    <span className="ms-2">{_}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Link className="btn-read-more">
                  <span>Read More</span>
                  <ArrowRight />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutSection;

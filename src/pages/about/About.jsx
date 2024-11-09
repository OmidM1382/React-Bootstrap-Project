import PageTitle from "../../components/pageTitle/PageTitle";
import { Container, Row, Col } from "react-bootstrap";
import { CircleCheck } from "lucide-react";
import About2 from "../../assets/images/about-2.jpg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CountsSection from "../../components/countsSection/CountsSection";
import "../../../public/css/about.css";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main>
      <PageTitle title="About Us" page="About Us" />
      <section className="aboutPage_section">
        <Container>
          <Row className="g-4 flex-xl-row-reverse">
            <Col
              xs={12}
              xl={6}
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <img src={About2} className="img-fluid" />
            </Col>
            <Col
              xs={12}
              xl={6}
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <h2>Voluptatem dignissimos provident quasi corporis</h2>
              <p>
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
            </Col>
          </Row>
        </Container>
      </section>
      <CountsSection />
      <section className="testimonials_section">
        <Container>
          <h2 className="testimonials-title">What are they saying</h2>
          
        </Container>
      </section>
    </main>
  );
};

export default About;

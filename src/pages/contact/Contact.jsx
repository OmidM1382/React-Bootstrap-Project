import PageTitle from "../../components/pageTitle/PageTitle";
import { Mail, MapPin, Phone } from "lucide-react";
import { Col, Container, Stack, Row, Form, Button } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../../../public/css/contactUs.css";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main>
      <PageTitle title="Contact Us" page="Contact Us" />
      <section className="contact-us_section">
        <Container>
          <Row className="g-4">
            <Col xs={12} xl={4}>
              <Stack
                direction="horizontal"
                gap={4}
                className="align-items-center mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="icon-wrapper">
                  <MapPin />
                </div>
                <div>
                  <h5>Address</h5>
                  <p className="mb-0">A108 Adam Street, New York, NY 535022</p>
                </div>
              </Stack>
              <Stack
                direction="horizontal"
                gap={4}
                className="align-items-center mb-4"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="icon-wrapper">
                  <Phone />
                </div>
                <div>
                  <h5>Call Us</h5>
                  <p className="mb-0">+1 5589 55488 55</p>
                </div>
              </Stack>
              <Stack
                direction="horizontal"
                gap={4}
                className="align-items-center mb-4"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="icon-wrapper">
                  <Mail />
                </div>
                <div>
                  <h5>Email Us</h5>
                  <p className="mb-0">info@example.com</p>
                </div>
              </Stack>
            </Col>
            <Col
              xs={12}
              xl={8}
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <Form>
                <Row xs={1} xl={2} className="g-4 mb-4">
                  <Col>
                    <Form.Control type="text" placeholder="Your Name" />
                  </Col>
                  <Col>
                    <Form.Control type="email" placeholder="Your Email" />
                  </Col>
                </Row>
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  className="mb-4"
                />
                <Form.Control
                  as="textarea"
                  placeholder="Message"
                  rows={10}
                  className="mb-4"
                />
                <div className="d-flex justify-content-center">
                  <Button>Send Message</Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Contact;

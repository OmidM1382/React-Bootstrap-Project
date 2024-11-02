import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import {
  ArrowRight,
  FileChartColumnIncreasing,
  Gem,
  Inbox,
} from "lucide-react";

const cards = [
  {
    id: 1,
    icon: <FileChartColumnIncreasing size={40} />,
    title: "Corporis voluptates officia eiusmod",
    description:
      "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
  },
  {
    id: 2,
    icon: <Gem size={40} />,
    title: "Ullamco laboris ladore pan",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
  },
  {
    id: 3,
    icon: <Inbox size={40} />,
    title: "Labore consequatur incidid dolore",
    description:
      "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",
  },
];

const WhyUsSection = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <section id="whyUs" className="whyUs_section">
        <Container>
          <Row className="g-4">
            <Col xs={12} xl={4} data-aos="fade-up" data-aos-delay="400" data-aos-duration="800" data-aos-once="true">
              <div className="whyUs-box">
                <h3 className="mb-3">Why Choose Our Products?</h3>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit Asperiores dolores sed
                  et. Tenetur quia eos. Autem tempore quibusdam vel
                  necessitatibus optio ad corporis.
                </p>
                <div>
                  <Link to="/" className="btn-learn-more">
                    <span>Learn More</span>
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} xl={8}>
              <Row className="g-4">
                {cards.map((card) => (
                  <Col xs={12} xl={4} key={card.id} data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" data-aos-once="true">
                    <div className="icon-box">
                      {card.icon}
                      <h4>{card.title}</h4>
                      <p className="text-muted mb-0">{card.description}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WhyUsSection;

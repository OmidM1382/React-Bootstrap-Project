import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const counts = [
  {
    id: 1,
    start: "0",
    end: "1232",
    content: "Students",
  },
  {
    id: 2,
    start: "0",
    end: "64",
    content: "Courses",
  },
  {
    id: 3,
    start: "0",
    end: "42",
    content: "Events",
  },
  {
    id: 4,
    start: "0",
    end: "24",
    content: "Trainers",
  },
];

const CountsSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="counts_section">
      <Container>
        <Row xs={1} md={3} lg={4} className="g-4">
          {counts.map((count) => (
            <Col
              key={count.id}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <span className="counter">
                <CountUp start={count.start} end={count.end}></CountUp>
              </span>
              <p className="text-muted">{count.content}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CountsSection;

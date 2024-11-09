import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const EventItem = ({ data }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Col
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-once="true"
    >
      <Card>
        <Card.Img variant="top" src={data.imgUrl} />
        <Card.Body>
          <Card.Title>
            <Link to="">{data.title}</Link>
          </Card.Title>
          <div className="mb-3">{data.date}</div>
          <Card.Text>{data.text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default EventItem;

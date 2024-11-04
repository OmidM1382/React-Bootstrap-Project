import { Card, Col, Container, Row, Button } from "react-bootstrap";
import PageTitle from "../../components/pageTitle/PageTitle";
import { Link } from "react-router-dom";
import "../../../public/css/events.css";

const eventItems = [
  {
    imgUrl: "./src/assets/images/events-item-1.jpg",
    title: "Introduction to webdesign",
    date: "Sunday, September 26th at 7:00 pm",
    text: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    imgUrl: "./src/assets/images/events-item-2.jpg",
    title: "Marketing Strategies",
    date: "Sunday, November 15th at 7:00 pm",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
  },
];

const Events = () => {
  return (
    <main>
      <PageTitle title="Events" page="Events" />
      <section className="events_section">
        <Container>
          <Row xs={1} lg={2} className="g-4">
            {eventItems.map((item, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src={item.imgUrl} />
                  <Card.Body>
                    <Card.Title>
                      <Link to="">{item.title}</Link>
                    </Card.Title>
                    <div className="mb-3">{item.date}</div>
                    <Card.Text>{item.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Events;

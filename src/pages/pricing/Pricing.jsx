import { Container, Row, Col } from "react-bootstrap";
import PageTitle from "../../components/pageTitle/PageTitle";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../../public/css/pricing.css";

const pricingCards = [
  {
    id: 1,
    header: "Free",
    price: "0",
  },
  {
    id: 2,
    header: "Business",
    price: "19",
  },
  {
    id: 3,
    header: "Developer",
    price: "29",
  },
  {
    id: 4,
    header: "Ultimate",
    price: "49",
  },
];

const Pricing = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main>
      <PageTitle title="Pricing" page="Pricing" />
      <section className="pricing_section">
        <Container>
          <Row className="g-4">
            {pricingCards.map((pricingCard) => (
              <Col
                key={pricingCard.id}
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="pricing-item">
                  <h3>{pricingCard.header}</h3>
                  <h4>
                    <sup>$</sup>
                    {pricingCard.price}
                    <span>/ month</span>
                  </h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li>Pharetra massa</li>
                    <li>Massa ultricies mi</li>
                  </ul>
                  <div className="btn-wrap">
                    <Link className="btn-buy">Buy Now</Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Pricing;

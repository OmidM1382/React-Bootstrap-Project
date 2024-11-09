import { Container, Row } from "react-bootstrap";
import PageTitle from "../../components/pageTitle/PageTitle";
import PricingItem from "../../components/pricingItem/PricingItem";
import "../../../public/css/pricing.css";

const pricingCards = [
  {
    header: "Free",
    price: "0",
  },
  {
    header: "Business",
    price: "19",
  },
  {
    header: "Developer",
    price: "29",
  },
  {
    header: "Ultimate",
    price: "49",
  },
];

const Pricing = () => {
  return (
    <main>
      <PageTitle title="Pricing" page="Pricing" />
      <section className="pricing_section">
        <Container>
          <Row className="g-4">
            {pricingCards.map((pricingCard, idx) => (
              <PricingItem key={idx} data={pricingCard} />
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Pricing;

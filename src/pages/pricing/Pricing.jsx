import { Container, Row } from "react-bootstrap";
import PageTitle from "../../components/pageTitle/PageTitle";
import PricingItem from "../../components/pricingItem/PricingItem";
import "../../../public/css/pricing.css";

const pricingItems = [
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
          <Row xs={1} md={2} lg={3} xl={4} className="g-4">
            {pricingItems.map((pricingItem, idx) => (
              <PricingItem key={idx} data={pricingItem} />
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Pricing;

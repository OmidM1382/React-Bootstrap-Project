import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PricingItem = ({ data }) => {
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
      <div className="pricing-item">
        <h3>{data.header}</h3>
        <h4>
          <sup>$</sup>
          {data.price}
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
  );
};

export default PricingItem;

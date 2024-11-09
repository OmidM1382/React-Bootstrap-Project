import { Col } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const FeatureItems = ({ data }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Col
      className="features-wrapper"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-once="true"
    >
      <div className="features-item">
        {data.icon}
        <h6 className="mb-0">
          <Link to="/" className="text-decoration-none text-black">
            {data.title}
          </Link>
        </h6>
      </div>
    </Col>
  );
};

export default FeatureItems;

import { Col } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const WhyUsItem = ({ data }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Col
      xs={12}
      xl={4}
      key={data.id}
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-once="true"
    >
      <div className="icon-box">
        {data.icon}
        <h4>{data.title}</h4>
        <p className="text-muted mb-0">{data.description}</p>
      </div>
    </Col>
  );
};

export default WhyUsItem;

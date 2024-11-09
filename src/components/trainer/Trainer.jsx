import { Col } from "react-bootstrap";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Trainer = ({ data }) => {
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
      <div className="trainer-img">
        <img src={data.imgURL} className="img-fluid" />
      </div>
      <div className="trainer-info">
        <h4>{data.name}</h4>
        <span>{data.major}</span>
        <p className="text-muted">{data.description}</p>
      </div>
    </Col>
  );
};

export default Trainer;

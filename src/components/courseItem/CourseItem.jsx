import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserRound } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CourseItem = ({ data }) => {
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
      <Card className="course-card">
        <Card.Img variant="top" src={data.imgURL} className="rounded-0" />
        <Card.Body className="course-card-body">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div className="course-category">{data.category}</div>
            <div className="course-price">
              <span>$</span>
              {data.price}
            </div>
          </div>
          <Card.Title className="course-title">
            <Link to={`/courses/${data.id}`}>{data.title}</Link>
          </Card.Title>
          <Card.Text className="course-text">{data.text}</Card.Text>
        </Card.Body>
        <Card.Footer className="course-card-footer">
          <div className="d-flex align-items-center gap-3">
            <img src={data.trainer_imgURL} className="course-trainer-img" />
            <Link to="/trainers" className="course-trainer-name">
              {data.trainer}
            </Link>
          </div>
          <div className="course-students">
            <UserRound size={20} />
            {data.students}
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CourseItem;

import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserRound } from "lucide-react";
import Loading from "../loading/Loading";
import Aos from "aos";
import "aos/dist/aos.css";

const CoursesSection = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Aos.init();
    setIsLoading(true);
    axios
      .get("http://localhost:8000/courses")
      .then((result) => {
        setCourses(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section id="courses" className="courses_section">
          <Container>
            <h2 className="courses-title">POPULAR COURSES</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
              {courses.map((course) => (
                <Col
                  key={course.id}
                  data-aos="zoom-in-up"
                  data-aos-delay="200"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <Card className="course-card">
                    <Card.Img
                      variant="top"
                      src={course.imgURL}
                      className="rounded-0"
                    />
                    <Card.Body className="course-card-body">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="course-category">{course.category}</div>
                        <div className="course-price">
                          <span>$</span>
                          {course.price}
                        </div>
                      </div>
                      <Card.Title className="course-title">
                        <Link to={`/courses/${course.id}`}>{course.title}</Link>
                      </Card.Title>
                      <Card.Text className="course-text">
                        {course.text}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="course-card-footer">
                      <div className="d-flex align-items-center gap-3">
                        <img
                          src={course.trainer_imgURL}
                          className="course-trainer-img"
                        />
                        <Link to="/trainers" className="course-trainer-name">
                          {course.trainer}
                        </Link>
                      </div>
                      <div className="course-students">
                        <UserRound size={20} />
                        {course.students}
                      </div>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}
    </>
  );
};

export default CoursesSection;

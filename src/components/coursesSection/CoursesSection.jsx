import { Container, Row } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import CourseItem from "../courseItem/CourseItem";

const CoursesSection = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
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
            <Row xs={1} md={2} xl={3} className="g-4">
              {courses.map((course) => (
                <CourseItem key={course.id} data={course} />
              ))}
            </Row>
          </Container>
        </section>
      )}
    </>
  );
};

export default CoursesSection;

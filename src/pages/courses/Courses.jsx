import PageTitle from "../../components/pageTitle/PageTitle";
import Loading from "../../components/loading/Loading";
import CourseItem from "../../components/courseItem/CourseItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

const Courses = () => {
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
        <main>
          <PageTitle title="Courses" page="Courses" />
          <section className="courses_section">
            <Container>
              <Row xs={1} md={2} lg={3} className="g-4">
                {courses.map((course) => (
                  <CourseItem key={course.id} data={course} />
                ))}
              </Row>
            </Container>
          </section>
        </main>
      )}
    </>
  );
};

export default Courses;

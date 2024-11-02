import PageTitle from "../../components/pageTitle/PageTitle";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import Loading from "../../components/loading/Loading";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../../public/css/courseDetails.css";

const CourseDetails = () => {
  const [courses, setCourses] = useState([]);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Aos.init();
    setIsLoading(true);
    axios
      .get(`http://localhost:8000/courses/${params.id}`)
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
          <PageTitle title="Course Details" page="Course Details" />
          <div className="course-details">
            <Container>
              <Row>
                <Col
                  className="col-12 col-lg-8"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <img src={courses.imgURL} className="img-fluid mb-3" />
                  <h2 className="course-title">{courses.title}</h2>
                  <p className="text-muted">
                    Qui et explicabo voluptatem et ab qui vero et voluptas. Sint
                    voluptates temporibus quam autem. Atque nostrum voluptatum
                    laudantium a doloremque enim et ut dicta. Nostrum ducimus
                    est iure minima totam doloribus nisi ullam deserunt.
                    Corporis aut officiis sit nihil est. Labore aut sapiente
                    aperiam. Qui voluptas qui vero ipsum ea voluptatem. Omnis et
                    est. Voluptatem officia voluptatem adipisci et iusto
                    provident doloremque consequatur. Quia et porro est. Et qui
                    corrupti laudantium ipsa. Eum quasi saepe aperiam qui
                    delectus quaerat in. Vitae mollitia ipsa quam. Ipsa aut qui
                    numquam eum iste est dolorum. Rem voluptas ut sit ut.
                  </p>
                </Col>
                <Col
                  className="col-12 col-lg-4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div className="course-info">
                    <h5>Trainer</h5>
                    <Link>{courses.trainer}</Link>
                  </div>
                  <div className="course-info">
                    <h5>Courses Fee</h5>
                    <div>{courses.price}</div>
                  </div>
                  <div className="course-info">
                    <h5>Available Seats</h5>
                    <div>{courses.available_seats}</div>
                  </div>
                  <div className="course-info">
                    <h5>Schedule</h5>
                    <div>{courses.schedule}</div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </main>
      )}
    </>
  );
};

export default CourseDetails;

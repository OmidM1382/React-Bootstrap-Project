import { Container, Row, Col } from "react-bootstrap"
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../../components/loading/Loading";
import PageTitle from "../../components/pageTitle/PageTitle";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../../public/css/trainers.css";

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Aos.init();
    setIsLoading(true);
    axios
      .get("http://localhost:8000/trainers")
      .then((result) => {
        setTrainers(result.data);
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
          <PageTitle title="Trainers" page="Trainers" />
          <div className="trainers">
            <Container>
              <Row xs={1} md={2} xl={3} className="g-5">
                {trainers.map((trainer) => (
                  <Col
                    key={trainer.id}
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="800"
                    data-aos-once="true"
                  >
                    <div className="trainer-img">
                      <img src={trainer.imgURL} className="img-fluid" />
                    </div>
                    <div className="trainer-info">
                      <h4>{trainer.name}</h4>
                      <span>{trainer.major}</span>
                      <p className="text-muted">{trainer.description}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </main>
      )}
    </>
  );
};

export default Trainers;

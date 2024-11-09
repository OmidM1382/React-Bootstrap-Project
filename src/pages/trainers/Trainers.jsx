import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import PageTitle from "../../components/pageTitle/PageTitle";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../../public/css/trainers.css";

const trainers = [
  {
    imgURL: "/src/assets/images/trainer-1.jpg",
    name: "Antonio",
    major: "Business",
    description:
      "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow",
  },
  {
    imgURL: "/src/assets/images/trainer-2.jpg",
    name: "Lana",
    major: "Marketing",
    description:
      "Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut",
  },
  {
    imgURL: "/src/assets/images/trainer-3.jpg",
    name: "Brandon",
    major: "Maths",
    description:
      "Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui",
  },
  {
    imgURL: "/src/assets/images/trainer-4.jpg",
    name: "Amanda Jepson",
    major: "Foreign Languages",
    description:
      "Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur",
  },
  {
    imgURL: "/src/assets/images/trainer-5.jpg",
    name: "Brian Doe",
    major: "Web Development",
    description:
      "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit",
  },
  {
    imgURL: "/src/assets/images/trainer-6.jpg",
    name: "Josepha Palas",
    major: "Business",
    description:
      "Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel",
  },
];

const Trainers = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <main>
        <PageTitle title="Trainers" page="Trainers" />
        <section className="trainers_section">
          <Container>
            <Row xs={1} md={2} xl={3} className="g-5">
              {trainers.map((trainer, idx) => (
                <Col
                  key={idx}
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
        </section>
      </main>
    </>
  );
};

export default Trainers;

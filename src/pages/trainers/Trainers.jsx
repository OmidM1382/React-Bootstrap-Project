import { Container, Row } from "react-bootstrap";
import PageTitle from "../../components/pageTitle/PageTitle";
import "../../../public/css/trainers.css";
import Trainer from "../../components/trainer/Trainer";

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
  return (
    <>
      <PageTitle title="Trainers" page="Trainers" />
      <section className="trainers_section">
        <Container>
          <Row xs={1} md={2} xl={3} className="g-5">
            {trainers.map((trainer, idx) => (
              <Trainer key={idx} data={trainer} />
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Trainers;

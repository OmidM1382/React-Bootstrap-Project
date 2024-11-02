import { Container, Row, Col } from "react-bootstrap";
import {
  Activity,
  Bolt,
  Command,
  Diamond,
  Eye,
  GraduationCap,
  LoaderPinwheel,
  Shuffle,
  Star,
  Sun,
  Video,
  Infinity,
} from "lucide-react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const items = [
  {
    id: 1,
    icon: <Eye size={30} />,
    title: "Lorem Ipsum",
  },
  {
    id: 2,
    icon: <Infinity size={30} />,
    title: "Dolor Sitema",
  },
  {
    id: 3,
    icon: <GraduationCap size={30} />,
    title: "Sed perspiiatis",
  },
  {
    id: 4,
    icon: <Bolt size={30} />,
    title: "Magani Dolores",
  },
  {
    id: 5,
    icon: <Shuffle size={30} />,
    title: "Nemo Enim",
  },
  {
    id: 6,
    icon: <Star size={30} />,
    title: "Eiusmod Tempor",
  },
  {
    id: 7,
    icon: <Diamond size={30} />,
    title: "Midela Teren",
  },
  {
    id: 8,
    icon: <Video size={30} />,
    title: "Pira Neve",
  },
  {
    id: 9,
    icon: <Command size={30} />,
    title: "Dirada Pack",
  },
  {
    id: 10,
    icon: <LoaderPinwheel size={30} />,
    title: "Moton Ideal",
  },
  {
    id: 11,
    icon: <Activity size={30} />,
    title: "Verdo Park",
  },
  {
    id: 12,
    icon: <Sun size={30} />,
    title: "Flavor Nivelanda",
  },
];

const FeaturesSection = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <section id="features" className="features_section">
        <Container>
          <Row xs={1} md={3} xl={4} className="g-4">
            {items.map((item) => (
              <Col key={item.id} className="features-wrapper" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" data-aos-once="true">
                <div className="features-item">
                  {item.icon}
                  <h6 className="mb-0">
                    <Link to="/" className="text-decoration-none text-black">{item.title}</Link>
                  </h6>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FeaturesSection;

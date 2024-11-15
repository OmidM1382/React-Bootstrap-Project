import { Container, Row } from "react-bootstrap";
import FeatureItem from "../featureItem/FeatureItem";
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

const featureItems = [
  {
    icon: <Eye size={30} />,
    title: "Lorem Ipsum",
  },
  {
    icon: <Infinity size={30} />,
    title: "Dolor Sitema",
  },
  {
    icon: <GraduationCap size={30} />,
    title: "Sed perspiiatis",
  },
  {
    icon: <Bolt size={30} />,
    title: "Magani Dolores",
  },
  {
    icon: <Shuffle size={30} />,
    title: "Nemo Enim",
  },
  {
    icon: <Star size={30} />,
    title: "Eiusmod Tempor",
  },
  {
    icon: <Diamond size={30} />,
    title: "Midela Teren",
  },
  {
    icon: <Video size={30} />,
    title: "Pira Neve",
  },
  {
    icon: <Command size={30} />,
    title: "Dirada Pack",
  },
  {
    icon: <LoaderPinwheel size={30} />,
    title: "Moton Ideal",
  },
  {
    icon: <Activity size={30} />,
    title: "Verdo Park",
  },
  {
    icon: <Sun size={30} />,
    title: "Flavor Nivelanda",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features_section">
      <Container>
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          {featureItems.map((featureItem, idx) => (
            <FeatureItem key={idx} data={featureItem} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;

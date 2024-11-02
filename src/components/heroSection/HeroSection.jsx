import { Container } from "react-bootstrap";
import HeroBg from "../../assets/images/hero-bg.jpg";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <section id="hero" className="hero_section">
        <img src={HeroBg} className="hero-img" />
        <Container>
          <div>
            <h1
              className="display-3"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              Learning Today, <br /> Leading Tomorrow
            </h1>
            <p
              className="lead"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
              data-aos-once="true"
            >
              We are team of talented designers making websites with Bootstrap
            </p>
            <div
              className="d-flex mt-4"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <Link to="/courses" className="btn-get-started">
                Get Started
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;

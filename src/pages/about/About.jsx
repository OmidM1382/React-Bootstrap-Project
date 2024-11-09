import CountsSection from "../../components/countsSection/CountsSection";
import PageTitle from "../../components/pageTitle/PageTitle";
import { Container, Row, Col } from "react-bootstrap";
import { CircleCheck, Quote } from "lucide-react";
import { useEffect } from "react";
import About2 from "../../assets/images/about-2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "../../../public/css/about.css";

const testimonials = [
  {
    imgURL: "./src/assets/images/testimonials-1.jpg",
    fullName: "Saul Goodman",
    major: "Ceo & Founder",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem, corrupti ea sapiente excepturi, molestias neque fugit quaerat maiores aliquid, corporis possimus dignissimos illum autem earum quae veritatis alias ipsa.",
  },
  {
    imgURL: "./src/assets/images/testimonials-2.jpg",
    fullName: "Sara Wilsson",
    major: "Designer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem, corrupti ea sapiente excepturi, molestias neque fugit quaerat maiores aliquid, corporis possimus dignissimos illum autem earum quae veritatis alias ipsa.",
  },
  {
    imgURL: "./src/assets/images/testimonials-3.jpg",
    fullName: "Jena Karlis",
    major: "Store Owner",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem, corrupti ea sapiente excepturi, molestias neque fugit quaerat maiores aliquid, corporis possimus dignissimos illum autem earum quae veritatis alias ipsa.",
  },
  {
    imgURL: "./src/assets/images/testimonials-4.jpg",
    fullName: "Matt Brandon",
    major: "Freelancer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem, corrupti ea sapiente excepturi, molestias neque fugit quaerat maiores aliquid, corporis possimus dignissimos illum autem earum quae veritatis alias ipsa.",
  },
  {
    imgURL: "./src/assets/images/testimonials-5.jpg",
    fullName: "John Larson",
    major: "Entrepreneur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem, corrupti ea sapiente excepturi, molestias neque fugit quaerat maiores aliquid, corporis possimus dignissimos illum autem earum quae veritatis alias ipsa.",
  },
];

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main>
      <PageTitle title="About Us" page="About Us" />
      <section className="aboutPage_section">
        <Container>
          <Row xs={1} lg={2} className="g-4 flex-lg-row-reverse">
            <Col
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <img src={About2} className="img-fluid" />
            </Col>
            <Col
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <h2>Voluptatem dignissimos provident quasi corporis</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                {[
                  "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  "Duis aute irure dolor in reprehenderit in voluptate velit.",
                  "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
                ].map((_, idx) => (
                  <li key={idx}>
                    <CircleCheck size={22} />
                    <span className="ms-2">{_}</span>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <CountsSection />
      <section className="testimonials_section">
        <Container>
          <h2 className="testimonials-title">What are they saying</h2>
          <Swiper
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
            data-aos-once="true"
            slidesPerView={1}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              992: {
                slidesPerView: 2,
              },
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="testimonial-wrapper">
                  <div className="testimonial-item">
                    <img src={testimonial.imgURL} />
                    <h4>{testimonial.fullName}</h4>
                    <h5 className="major">{testimonial.major}</h5>
                    <p>
                      <Quote className="quote-icon-left" />
                      <span className="text-muted">{testimonial.text}</span>
                      <Quote className="quote-icon-right" />
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
    </main>
  );
};

export default About;

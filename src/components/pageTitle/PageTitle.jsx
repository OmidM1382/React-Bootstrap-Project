import { Container, Row, Breadcrumb } from "react-bootstrap";
import "../../../public/css/pageTitle.css";

const PageTitle = (props) => {
  return (
    <>
      <div className="page-title">
        <div className="heading">
          <Container>
            <Row className="justify-content-center text-center">
              <h1>{props.title}</h1>
              <p>
                Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
                quo odio sint voluptas consequatur ut a odio voluptatem. Sit
                dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
                quaerat ipsum dolorem.
              </p>
            </Row>
          </Container>
        </div>
        <div className="bread_crumbs">
          <Container>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>{props.page}</Breadcrumb.Item>
            </Breadcrumb>
          </Container>
        </div>
      </div>
    </>
  );
};

export default PageTitle;

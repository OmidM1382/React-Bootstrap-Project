import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../public/css/notFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <Container>
        <h1 className="display-1">4 0 4</h1>
        <div className="fs-5 mb-4">Page not found</div>
        <p className="mb-4 mx-auto" style={{ maxWidth: "640px" }}>
          Sorry, we couldn't find the page you where looking for. We suggest
          that you return to home page.
        </p>
        <Link to="/">Go Home</Link>
      </Container>
    </div>
  );
};

export default NotFound;

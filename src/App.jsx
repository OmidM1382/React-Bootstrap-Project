import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import CourseDetails from "./pages/courseDetails/CourseDetails";
import Trainers from "./pages/trainers/Trainers";
import Pricing from "./pages/pricing/Pricing";
import NotFound from "./pages/notFound/NotFound";
import Events from "./pages/events/Events";
import Contact from "./pages/contact/Contact"

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;

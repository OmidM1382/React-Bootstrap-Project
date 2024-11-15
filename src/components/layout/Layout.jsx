import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import ScrollToTop from "../scrollToTop/ScrollToTop";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Layout;

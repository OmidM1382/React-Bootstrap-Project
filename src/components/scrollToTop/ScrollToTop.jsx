import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../../../public/css/scrollToTop.css";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    if (window.scrollY > 250) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Link
        onClick={handleClick}
        className={`scroll-to-top ${visible ? "visible" : ""}`}
      >
        <ArrowUp />
      </Link>
    </>
  );
};

export default ScrollToTop;

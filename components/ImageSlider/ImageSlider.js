import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ImageSlider({ slides }) {
  const [current, setcurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setcurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setcurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaChevronLeft className="left-arrow" onClick={prevSlide} />
      <FaChevronRight className="right-arrow" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="web-profile"
                layout="fill"
                className="image"
              ></img>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default ImageSlider;

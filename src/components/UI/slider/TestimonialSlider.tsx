import React from "react";
import Slider from "react-slick";
import ava1 from "../../../assets/images/ava-1.jpg";
import ava2 from "../../../assets/images/ava-2.jpg";
import ava3 from "../../../assets/images/ava-3.jpg";
import ava4 from "../../../assets/images/ava-4.jpg";
const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="mt-4">
        <p className="review-text fw-lighter">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          dolorem, explicabo aut molestiae minus deserunt quisquam quas maxime
          labore.
        </p>
        <div className="d-flex align-items-center gap-3">
          <img
            className="w-25 rounded rounded"
            src={ava1}
            alt=""
          />
          <h6>Jhon doe</h6>
        </div>
      </div>
      <div>
        <p className="review-text fw-lighter">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          dolorem, explicabo aut molestiae minus deserunt quisquam quas maxime
          labore.
        </p>
        <div className="d-flex align-items-center gap-3">
          <img
            className="w-25 rounded"
            src={ava2}
            alt=""
          />
          <h6>Jhon doe</h6>
        </div>
      </div>
      <div>
        <p className="review-text fw-lighter">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          dolorem, explicabo aut molestiae minus deserunt quisquam quas maxime
          labore.
        </p>
        <div className="d-flex align-items-center gap-3">
          <img
            className="w-25 rounded"
            src={ava3}
            alt=""
          />
          <h6>Jhon doe</h6>
        </div>
      </div>
      <div>
        <p className="review-text fw-lighter">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          dolorem, explicabo aut molestiae minus deserunt quisquam quas maxime
          labore.
        </p>
        <div className="d-flex align-items-center gap-3">
          <img
            className="w-25 rounded"
            src={ava4}
            alt=""
          />
          <h6>Jhon doe</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;

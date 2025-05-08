import React from "react";

const Slider = () => {
  return (
    <div className="relative w-full max-w-[1280px] mx-auto rounded-lg overflow-hidden h-[250px] md:h-[400px] lg:h-[500px]">
      <div className="absolute inset-0  z-10 pointer-events-none"></div>

      <div className="carousel w-full h-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="/slider-4.jpg"
            className="w-full h-full object-cover"
            alt="Slide 1"
          />
          <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 z-20 flex justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="/slider-1.jpg"
            className="w-full h-full object-cover"
            alt="Slide 2"
          />
          <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 z-20 flex justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="/slider-2.jpg"
            className="w-full h-full object-cover"
            alt="Slide 3"
          />
          <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 z-20 flex justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="/slider-3.jpg"
            className="w-full h-full object-cover"
            alt="Slide 4"
          />
          <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 z-20 flex justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

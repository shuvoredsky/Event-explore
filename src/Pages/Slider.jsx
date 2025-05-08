import React from "react";

const Slider = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-2">
      <div className="carousel w-full rounded-lg overflow-hidden h-[250px] md:h-[400px] lg:h-[500px] relative">
        {/* Overlay and Text */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10 flex items-center justify-center text-white text-center px-4">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold">
            Discover the Experience, One Event at a Time.
          </h2>
        </div>

        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/delicious-street-food-fest_23-2151543744.jpg"
            className="w-full object-cover h-full"
            alt="Slide 1"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/enjoying-street-food-fest_23-2151543833.jpg"
            className="w-full object-cover h-full"
            alt="Slide 2"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/enjoying-street-food-fest_23-2151543838.jpg"
            className="w-full object-cover h-full"
            alt="Slide 3"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/enjoying-street-food-fest_23-2151543817.jpg"
            className="w-full object-cover h-full"
            alt="Slide 4"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
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

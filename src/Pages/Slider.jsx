import React from "react";

const Slider = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto  px-2">
      <div className="carousel w-full rounded-lg overflow-hidden h-[250px] md:h-[400px] lg:h-[500px]">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/delicious-street-food-fest_23-2151543744.jpg?t=st=1746680287~exp=1746683887~hmac=3b4b26d258b29558e2093b887886ada945b2f6b27e0fcf78d5d5ac93cc1f7e2e&w=1800"
            className="w-full object-cover"
            alt="Slide 1"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
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
            src="https://img.freepik.com/free-photo/enjoying-street-food-fest_23-2151543833.jpg?t=st=1746680365~exp=1746683965~hmac=5c49a21d5a340a9e2ef7a134e234fadc4371eedff221728d77a28a32e031ec70&w=1380"
            className="w-full object-cover"
            alt="Slide 2"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
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
            src="https://img.freepik.com/free-photo/enjoying-street-food-fest_23-2151543838.jpg?t=st=1746680427~exp=1746684027~hmac=31f02214b1667efb0e86529b272d9712c3abb697a36758e71a0448986153d4fd&w=1800"
            className="w-full object-cover"
            alt="Slide 3"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
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
            src="https://img.freepik.com/free-photo/enjoying-street-food-fest_23-2151543817.jpg?t=st=1746680558~exp=1746684158~hmac=0550c2f838b1e8c2ec984bd7cdc731104a2cb14e0ef6ce7775d30d089a946344&w=1380"
            className="w-full object-cover"
            alt="Slide 4"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
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

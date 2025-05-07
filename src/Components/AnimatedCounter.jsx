import { useEffect, useRef, useState } from "react";
import { FaCity, FaUsers } from "react-icons/fa";
import { MdCoPresent } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";

const AnimatedCounter = () => {
  const [doctorCount, setDoctorCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [patientsCount, setPatientsCount] = useState(0);
  const [staffCount, setStaffCount] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);
  const counterRef = useRef(null);

  const targetValues = {
    doctor: 788,
    reviews: 3000,
    patients: 21,
    staffs: 13,
  };
  const duration = 3000;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimated) {
            setIsAnimated(true);
            startCountAnimation();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isAnimated]);

  const startCountAnimation = () => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const animate = () => {
      const currentTime = Date.now();
      const progress = Math.min(1, (currentTime - startTime) / duration);

      setDoctorCount(Math.floor(targetValues.doctor * progress));
      setReviewCount(Math.floor(targetValues.reviews * progress));
      setPatientsCount(Math.floor(targetValues.patients * progress));
      setStaffCount(Math.floor(targetValues.staffs * progress));

      if (currentTime < endTime) {
        requestAnimationFrame(animate);
      } else {
        setDoctorCount(targetValues.doctor);
        setReviewCount(targetValues.reviews);
        setPatientsCount(targetValues.patients);
        setStaffCount(targetValues.staffs);
      }
    };
    requestAnimationFrame(animate);
  };

  return (
    <div ref={counterRef} className="flex flex-wrap justify-center gap-6 py-10">
      <div className="w-56 p-6 text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <MdCoPresent size={30} color="violet" />
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          {doctorCount}+
        </h2>
        <p className="text-lg text-gray-600">Total Events Hosted</p>
      </div>
      <div className="w-56 p-6 text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <FaUsers size={30} color="red" />
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          {reviewCount}+
        </h2>
        <p className="text-lg text-gray-600">Active Users</p>
      </div>
      <div className="w-56 p-6 text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <FaCity size={30} color="green" />
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          {patientsCount}+
        </h2>
        <p className="text-lg text-gray-600">Cities Covered</p>
      </div>
      <div className="w-56 p-6 text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <TbCategoryPlus size={30} color="blue" />
        <h2 className="text-4xl font-bold text-gray-800 mb-2">{staffCount}+</h2>
        <p className="text-lg text-gray-600">Event Categories</p>
      </div>
    </div>
  );
};

export default AnimatedCounter;

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
      { threshold: 0.5 }
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
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
    <div className="bg-violet-400 py-10 px-4">
      <div ref={counterRef} className="flex flex-wrap justify-center gap-6">
        {[
          {
            icon: <MdCoPresent size={30} className="text-violet-700" />,
            count: doctorCount,
            label: "Total Events Hosted",
          },
          {
            icon: <FaUsers size={30} className="text-violet-700" />,
            count: reviewCount,
            label: "Active Users",
          },
          {
            icon: <FaCity size={30} className="text-violet-700" />,
            count: patientsCount,
            label: "Cities Covered",
          },
          {
            icon: <TbCategoryPlus size={30} className="text-violet-700" />,
            count: staffCount,
            label: "Event Categories",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="w-56 p-6 text-center rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl hover:shadow-violet-400 hover:scale-105 transition-all duration-300 text-white"
          >
            {item.icon}
            <h2 className="text-4xl font-bold my-2">{item.count}+</h2>
            <p className="text-sm tracking-wide">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;

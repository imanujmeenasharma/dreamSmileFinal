import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { RiToothFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { FaPlay } from "react-icons/fa6";
import { fetchMyModels, datetime } from "../../../lib/call";
import { urlFor } from "../../../lib/imageBuilder";

function SpecialOffers({ closePopup }) {
  const [models, setModels] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMyModels();
      setModels(data);
    };

    const getdatetime = async () => {
      const data = await datetime();
      console.log(data);
      setDate(data);
    };

    getData();
    getdatetime();
  }, []);

  useEffect(() => {
    // Get the Lenis instance
    const lenis = window.lenis;

    if (lenis) {
      // Stop Lenis scrolling when popup is opened
      lenis.stop();
    }

    return () => {
      // Re-enable Lenis scrolling when popup is closed
      if (lenis) {
        lenis.start();
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" data-lenis-prevent>
      {/* Overlay */}
      <div className="fixed inset-0 bg-[#FFA500]" />

      {/* Content Container */}
      <div className="relative min-h-screen">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="fixed right-6 top-6 z-50 text-white hover:text-white/80 p-2"
        >
          <span className='text-4xl bg-black rounded-full h-20 w-20 cursor-pointer flex items-center justify-center'><IoMdClose /></span>
        </button>

        <div className="px-40 mx-auto p-6">
          {/* Header Section */}
          <div className="pt-16 space-y-2 text-white mb-12 text-center md:text-left">
            <h1 className="text-6xl font-medium">Weekly Special Offers</h1>
            <p className="text-white/90 w-[50vw] text-sm sm:text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur. In quis enim sit tortor dignissim quis eget elementum. Urna at a ac facilisi. Quisque ut molestie facilisis id rutrum orci ipsum.
            </p>
          </div>

          {/* Date & Timings Section */}
          <div className="space-y-6 text-white mb-12">
            <h2 className="text-4xl font-medium">Date & Timings</h2>
            <div className="flex flex-wrap gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-4 border border-white/30">
                <span className="text-2xl">02</span>
                <span className="text-2xl">—</span>
                <span className="text-2xl">06</span>
                <span className="text-2xl px-4">Feb, 2025</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-4 border border-white/30">
                <span className="text-2xl">11:30 AM</span>
                <span className="text-2xl">—</span>
                <span className="text-2xl">05:45 PM</span>
              </div>
            </div>
          </div>

          {/* Offers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
            {models.map((item, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden">
                <div className="h-64 p-5">
                  {item.image && (
                    <img
                      src={urlFor(item?.image).url()}
                      alt={item?.title}
                      className="object-cover w-full rounded-2xl h-full"
                    />
                  )}
                </div>
                <div className="px-6 pb-6">
                  <h3 className="text-2xl font-medium mb-4">{item.title}</h3>
                  <div className="flex gap-2 mb-4">
                    {item?.tags?.length > 0 &&
                      item?.tags?.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">{item.validDate}</p>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  <Link to="/contact" className="w-full block text-center cursor-pointer bg-black text-white py-3 rounded-lg mt-6 hover:bg-black/90 transition-colors">
                    Book An Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Home = () => {
  const location = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: "./carouselImages/1.JPG",
      title: "People Who Make Dream Smile Shine",
      desc: "Our team of experienced dentists and hygienists are dedicated to providing you with the highest quality dental care. We are committed to your comfort and satisfaction.",
    },
    {
      src: "./carouselImages/3.JPG",
      title: "Advanced Dental Technology",
      desc: "We utilize state-of-the-art dental technology to deliver faster, safer, and more precise treatments. From digital X-rays and intraoral scanners to laser dentistry and 3D imaging.",
    },
    {
      src: "./carouselImages/4.JPG",
      title: "Preventive Care & Hygiene",
      desc: "Healthy smiles start with prevention. Our preventive care programs focus on regular cleanings, thorough exams, and personalized oral hygiene guidance to help you avoid dental issues before they begin.",
    },
    {
      src: "./carouselImages/2.JPG",
      title: "Smiles Crafted by Certified Professionals",
      desc: "Our team of experienced dentists and hygienists are dedicated to providing you with the highest quality dental care. We are committed to your comfort and satisfaction.",
    },
  ];
  const carouselData = [{
    image: "https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Comprehensive Dental Service",
    subtitle: "From routine checkups to advanced procedures, we've got you covered.",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1669704098876-2a38eb10e56a?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Smile With Confidence",
    subtitle: "Transform your smile with our cosmetic dentistry solutions.",
  }, {
    image: "https://plus.unsplash.com/premium_photo-1669704098776-1408db9ea894?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Your Family’s Dental Home",
    subtitle: "Personalized care for kids, adults, and seniors under one roof.",
  }, {
    image: "https://plus.unsplash.com/premium_photo-1669703777548-08503c3085a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Meet to our team",
    subtitle: "Dedicated professionals committed to your perfect smile.",
  }, {
    image: "https://plus.unsplash.com/premium_photo-1669704098817-a9ef1f9694b3?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Book Your Appointment Online",
    subtitle: "Hassle-free scheduling with just a few clicks.",
  }
  ]
  const testimonials = [{
    name: "Patient-1",
    video: "./Testimonial/testimonial-3.mp4",
  },
  {
    name: "Patient-2",
    video: "./Testimonial/testimonial-2.mp4",
  },
  {
    name: "Patient-3",
    video: "./Testimonial/testimonial-1.mp4",
  },
  {
    name: "Patient-4",
    video: "./Testimonial/testimonial-4.mp4",
  }
  ]
  const comfortableTreatment = [{
    icon: '<RiToothFill className="w-8 h-8" />',
    title: "Preventive Dental Care",
    description: "Regular checkups, cleanings, and exams to ensure your smile stays healthy and cavity-free."
  },
  {
    icon: '<RiToothFill className="w-8 h-8" />',
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with teeth whitening, veneers, and bonding treatments tailored for a flawless finish."
  },
  {
    icon: '<RiToothFill className="w-8 h-8" />',
    title: "Restorative Dentistry",
    description: "Repair damaged teeth with fillings, crowns, and bridges for a natural look and feel."
  },
  {
    icon: '<RiToothFill className="w-8 h-8" />',
    title: "Oral Surgery",
    description: "Expert surgical care for wisdom teeth extraction, dental implants, and more."
  }
  ]
  const reviews = [{
    name: "Jeffery Minor",
    review: "Had a dental emergency and my regular dentist closed an hour early. The kind people at Dream Smile Dental saw me right away despite being past 5pm (their Friday closing hour) they helped me right away with no hesitation and explained everything perfectly and answered every question I had very clearly. Highly recommend this service!",
  },
  {
    name: "Maggie Mendez",
    review: "I had an extraction done at Dream Smile Dental. They were phenomenal! I had the best experience. I’ve lived in Dalton for years and I’ve visited different locations in the area. This one by far has been my favorite. The staff is wonderful and Dr. Kumar is excellent! 10/10!"
  },
  {
    name: "Gabriel Waldez",
    review: "I had a great service even tho I didn’t have an appointment they were more than glad to treat me. I do recommend this place for sure"
  },
  {
    name: "Anne Luna",
    review: "I had pain and came on the office they saw me the same day and yook cate of me. They qere very niceans affordable i recommend this office"
  },
  {
    name: "Dylan Mallete",
    review: "Great experience! Got last minute appointment to get wisdom tooth extracted."
  },

  {
    name: "Jorge Hernandez",
    review: "Pretty good service. And I wasn't expecting to have an appointment at the same day. 😇"
  }
  ]
  const whoWeHelp = [{
    title: "Kids",
    description: "Fun and friendly dental services that help kids feel comfortable while building strong dental habits early on.",
    image: "https://images.unsplash.com/photo-1672457666348-745875c92fdc?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Adults",
    description: "Personalized dental care for adults — from regular cleanings to advanced treatments for a confident, healthy smile.",
    image: "https://images.unsplash.com/photo-1634795776422-5a85c8e0f1ce?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Anxious Patients",
    description: "We provide a calm, understanding environment with gentle techniques to ease anxiety during dental visits.",
    image: "https://images.unsplash.com/photo-1649614859327-7c6e68cc502a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
  ]


  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const videoRefs = useRef([]);
  const playButtonRefs = useRef([]);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleVideoClick = (index) => {
    // Pause previous video
    if (activeIndex !== null && activeIndex !== index) {
      const prevVideo = videoRefs.current[activeIndex];
      const prevBtn = playButtonRefs.current[activeIndex];

      if (prevVideo && !prevVideo.paused) {
        prevVideo.pause();
        if (prevBtn) prevBtn.classList.remove("hidden");
        prevVideo.currentTime = 0;
      }
    }

    const currentVideo = videoRefs.current[index];
    const currentBtn = playButtonRefs.current[index];

    if (currentVideo.paused) {
      currentVideo.play();
      if (currentBtn) currentBtn.classList.add("hidden");
      setActiveIndex(index);
    } else {
      currentVideo.pause();
      if (currentBtn) currentBtn.classList.remove("hidden");
      setActiveIndex(null);
    }
  };


  // Refs for horizontal scrolling
  const reviewsRef = useRef(null);
  const servicesRef = useRef(null);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    document.body.style.overflow = isPopupOpen ? 'hidden' : 'unset';
  }, [isPopupOpen]);

  return (
    <div className="relative">
      {/* Full-page background video */}
      <video
        src="./video.mp4"
        autoPlay
        loop
        playsInline
        muted
        className="w-full h-full object-cover fixed top-0 left-0 -z-10 opacity-25"
      />

      {/* Main content */}
      <div className="relative z-10 min-h-screen bg-transparent">
        {location.pathname === "/" && (
          <>
            {/* Hero Section */}
            <div className="relative bg-transparent h-[90vh] w-full pt-14 lg:pt-0">
              <div className="z-30 bg-transparent relative h-full w-full flex flex-col md:flex-row items-center gap-6 lg:gap-0">
                <div className="bg-transparent flex flex-col justify-center w-full md:w-1/2 px-4 sm:px-6 lg:px-20 py-8 md:py-0">
                  <h1 className="text-4xl leading-none sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter font-bold mb-4 md:mb-6">
                    {images[currentIndex].title}
                  </h1>
                  <p className="text-gray-600 mb-6 md:mb-8 text-sm sm:text-base md:text-lg lg:text-xl">
                    {images[currentIndex].desc}
                  </p>
                  <div className="mb-8 md:mb-0">
                    <Link to="/contact" className="border-2 inline-block px-6 sm:px-8 py-2 rounded-full cursor-pointer text-sm md:text-base lg:text-lg hover:bg-black hover:text-white hover:border-black transition-colors duration-300">
                      Book An Appointment
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-1/2 h-[60vh] md:h-[90vh] overflow-hidden">
                  <div
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {images.map((src, idx) => (
                      <div key={idx} className="w-full flex-shrink-0 h-full">
                        <img
                          src={src.src}
                          alt={`Slide ${idx + 1}`}
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#FF9500] py-12 lg:py-16">
              <div className="container mx-auto px-5 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="lg:pl-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                      Weekly Special Offers
                    </h2>
                    <p className="text-white text-base lg:text-lg mb-8">
                      Get amazing discounts on our dental services every week.
                      Don&apos;t miss out on these exclusive deals!
                    </p>
                    <button
                      className="bg-white text-black px-6 py-3 cursor-pointer rounded-full hover:bg-gray-100 text-sm lg:text-lg font-medium"
                      onClick={openPopup}
                    >
                      Checkout Special Offers
                    </button>
                  </div>
                  <div className="flex justify-center items-center space-x-6">
                    <div className="w-48 h-48 flex items-center justify-center">
                      <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/016/326/827/small/3d-dental-teeth-isolated-on-transparent-background-free-png.png"
                        alt="Sad Tooth"
                        className="w-40 h-40 lg:w-48 lg:h-48 object-contain"
                      />
                    </div>
                    <div className="w-48 h-48 flex items-center justify-center">
                      <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/016/326/827/small/3d-dental-teeth-isolated-on-transparent-background-free-png.png"
                        alt="Happy Tooth"
                        className="w-40 h-40 lg:w-48 lg:h-48 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {isPopupOpen && <SpecialOffers closePopup={closePopup} />}
            <div className="container px-5 lg:px-20 py-20">
              <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                <div className="flex flex-col gap-4 lg:flex-row">
                  <div className="flex md:flex-col justify-between gap-4 w-full lg:w-60">
                    <div className="bg-zinc-300 h-48 lg:w-56 flex px-8 justify-center flex-col w-1/2 rounded-[2.5vw]">
                      <div className="text-7xl font-black tracking-tighter leading-tight">
                        8+
                      </div>
                      <div className="text-xl text-black-800 tracking-tighter font-light leading-none opacity-90 w-20">
                        Years of Experience
                      </div>
                    </div>
                    <div className="bg-zinc-300 h-48 lg:w-56 flex px-8 w-1/2 justify-center flex-col rounded-[2.5vw]">
                      <div className="text-6xl font-black tracking-tighter leading-tight">
                        5K+
                      </div>
                      <div className="text-xl text-black-800 tracking-tighter font-light leading-none mt-2 w-1 opacity-90">
                        Satisfied Patients
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center md:w-96">
                    <img
                      src="https://img.freepik.com/free-photo/smiling-young-man-sitting-dentist-chair-while-doctor-examining-his-teeth_158595-7733.jpg"
                      alt="Special Offer"
                      className="rounded-4xl w-full h-[400px] object-cover border border-gray-300"
                    />
                  </div>
                </div>
                {/* Right Content Section */}
                <div className="flex flex-col justify-center space-y-8 w-full md:w-5/12">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter font-bold">
                    Dr. Manoj Kumar
                  </h1>
                  <p className="text-base md:text-lg lg:text-xl text-gray-600">
                    I am a passionate dentist committed to providing personalized dental care with a gentle touch. With years of experience in diagnosing and treating, my goal is not just to relieve pain, but to restore confidence and bring smiles to my patients’ faces.
                  </p>
                  <div>
                    <Link to="/contact" className="bg-black font-medium cursor-pointer text-white inline-block px-10 py-2 rounded-xl hover:bg-gray-800">
                      Book an Appointment
                    </Link>
                  </div>
                  <p className="text-sm text-gray-600">
                    Whether it’s a routine check-up, cosmetic enhancement, or a complex procedure, I strive to make every visit comfortable and ensure the highest standard of care. Your oral health is my priority.
                  </p>
                </div>
              </div>
            </div>

            {/* Services Section */}
            {/* <div className="container mx-auto px-5 lg:px-20 py-10 lg:py-16">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  What we are offering today
                </h2>
                <div className="flex space-x-2">
                  <button
                    className="p-4 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200"
                    onClick={() => scrollLeft(servicesRef)}
                  >
                    <MdChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    className="p-4 cursor-pointer rounded-full bg-black text-white hover:bg-gray-200"
                    onClick={() => scrollRight(servicesRef)}
                  >
                    <MdChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div
                className="flex overflow-x-auto gap-6 pb-6 hide-scroller"
                ref={servicesRef}
              >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="flex-none w-80 bg-gray-100 p-6 rounded-xl aspect-square border border-gray-300 shadow-sm"
                  >
                    <div className="w-16 h-16 bg-white rounded-full mb-4"></div>
                    <h3 className="text-xl font-medium mb-2">
                      Dental Service {item}
                    </h3>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Comfortable Treatment Section */}
            <div className="container mx-auto px-5 lg:px-20 py-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 lg:mb-16">
                Comfortable treatment for you
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {comfortableTreatment.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-3xl shadow-lg text-center border border-gray-400"
                  >
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <RiToothFill className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-medium mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why People Love Section */}
            <div className="container mx-auto p-5 lg:p-20">
              <div className="space-y-8">
                <div className="max-w-full">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    Stories Behind the Smiles
                  </h1>
                  <p className="text-gray-700 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-sm md:text-base lg:text-sm leading-relaxed mb-4">
                    At Dream Smile, we believe that a confident smile can change lives. Our patients love us because we combine advanced dental technology with a warm, friendly approach that makes every visit comfortable and stress-free. From painless treatments to personalized care, we focus on delivering beautiful results that last.
                  </p>
                  <Link to="/gallery" className="bg-black cursor-pointer text-white px-6 sm:px-8 py-3 sm:py-4 text-sm md:text-md lg:text-lg rounded-full hover:bg-gray-800 transition mb-8">
                    See more reviews
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {testimonials.map((item, index) => (
                    <div
                      key={index}
                      className="relative cursor-pointer rounded-2xl overflow-hidden bg-gray-100 shadow-lg border border-gray-400"
                    >
                      <video
                        ref={el => videoRefs.current[index] = el}
                        src={item.video}
                        className="w-full h-[400px] md:h-[250px] lg:h-[400px] object-cover"
                        onClick={() => handleVideoClick(index)}
                      />
                      <button
                        ref={el => playButtonRefs.current[index] = el}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 flex items-center justify-center -translate-y-1/2 text-xl sm:text-2xl md:text-3xl bg-white h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full"
                      >
                        <FaPlay />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="container mx-auto px-5 lg:px-20 py-16">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  150+ Reviews Reviews
                </h1>
                <div className="flex space-x-2">
                  <button
                    className="p-4 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200"
                    onClick={() => scrollLeft(reviewsRef)}
                  >
                    <MdChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    className="p-4 cursor-pointer rounded-full bg-black text-white"
                    onClick={() => scrollRight(reviewsRef)}
                  >
                    <MdChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div
                className="flex overflow-x-auto hide-scroller gap-6 pb-6 scrollbar-hide"
                ref={reviewsRef}
              >
                {reviews.map((item, index) => (
                  <div
                    key={index}
                    className="flex-none w-80 bg-[#F1FFE7] p-6 rounded-2xl border border-gray-300 shadow-md"
                  >
                    <div className="bg-[#FF9500] text-white text-sm px-4 py-1 rounded-full w-fit mb-4">
                      {item.name}
                    </div>
                    <h3 className="font-medium mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {item.review}
                    </p>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Who We Help Section */}
            <div className="bg-zinc-200 py-16">
              <div className="container mx-auto px-5 lg:px-20">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 lg:mb-16">
                  Who we help?
                </h2>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
                  {whoWeHelp.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white w-full lg:w-72 p-6 rounded-3xl border border-gray-300 flex flex-col items-center justify-center"
                    >
                      <img
                        src={item.image}
                        alt="Patient"
                        className="w-full h-48 object-cover rounded-2xl mb-4"
                      />
                      <h3 className="text-2xl font-medium mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-center text-sm">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;

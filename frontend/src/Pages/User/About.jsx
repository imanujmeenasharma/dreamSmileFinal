import React from 'react'

const About = () => {
  const doctors = [
    {
      name: "Dr. Manoj Kumar",
      title: "Lead Dentist",
      description:
        "With 8+ years of experience, Dr. Manoj Kumar specializes in cosmetic dentistry and oral surgery.",
      image: "./carouselImages/1.JPG", // Replace with actual image URL
      titleColor: "text-blue-600",
    }
  ];
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full bg-[#ecfffb]  flex items-center justify-center py-10  px-10 h-screen">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-0">
          {/* Left Content */}
          <div className="w-[80%] md:w-1/2 mx-auto text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Welcome to Dream Smile Dental
            </h1>
            <p className=" mx-auto text-lg md:text-xl lg:text-2xl text-gray-600 mt-4">
              Providing exceptional dental care with a gentle touch for over 8+
              years. Your smile is our priority.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://png.pngtree.com/png-vector/20241210/ourmid/pngtree-close-up-of-a-wide-smile-with-perfect-teeth-png-image_14654476.png"
              alt="Dental Teeth"
              className="w-70 md:w-96"
            />
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="w-full flex flex-col items-center text-center py-20 px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Our Mission</h2>
        <p className="text-base md:text-xl lg:text-2xl text-gray-600 mt-4 max-w-3xl">
          At Bright Smile Dental, we are committed to providing comprehensive
          dental care in a comfortable and welcoming environment. Our team of
          experienced professionals uses the latest technology to ensure the
          best possible care for your dental health.
        </p>
      </section>

      {/* Meet Our Team Section */}
      <div className="flex flex-col bg-zinc-200 items-center w-full py-16 px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-10">Meet The Doctor</h2>
        <div className="grid grid-cols-1 gap-8 max-w-md w-full">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-zinc-100 rounded-4xl p-6 text-center"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-64 object-cover rounded-2xl object-top"
              />
              <h3 className="text-xl font-bold text-gray-900 mt-4">
                {doctor.name}
              </h3>
              <p className={`font-medium ${doctor.titleColor}`}>
                {doctor.title}
              </p>
              <p className="text-sm md:text-base text-gray-600 mt-2">{doctor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About

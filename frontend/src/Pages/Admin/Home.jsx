import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidOffer } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const Home = () => {
  // State to control form visibility
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Toggle form visibility
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  // Sample offer data
  const offers = [
    {
      id: 1,
      name: "Teeth Whitening Special",
      description:
        "Professional teeth whitening treatment at a discounted price",
      price: 12000,
      discount: 25,
    },
    {
      id: 2,
      name: "Complete Dental Checkup",
      description: "Comprehensive dental examination with X-rays included",
      price: 5000,
      discount: 20,
    },
    {
      id: 3,
      name: "Root Canal Treatment",
      description:
        "Special offer on root canal procedure with free consultation",
      price: 15000,
      discount: 15,
    },
    {
      id: 4,
      name: "Kids Dental Package",
      description: "Complete dental care package for children under 12",
      price: 3500,
      discount: 30,
    },
    {
      id: 5,
      name: "Dental Implant Offer",
      description: "Get dental implants at a reduced price this month",
      price: 25000,
      discount: 10,
    },
  ];

  // Handlers for edit and delete (placeholder functions)
  const handleEdit = (id) => {
    console.log("Edit offer with ID:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete offer with ID:", id);
  };

  return (
    <div className="min-h-screen w-full bg-zinc-200 overflow-x-hidden">
      <div className="w-full px-4 sm:px-10 md:px-16 lg:px-20 pt-14 pb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter font-medium flex flex-wrap items-center gap-4">
          Wassup, Doctor
          <img
            className="h-12 sm:h-14 md:h-16 lg:h-20 object-contain bg-white rounded-full p-2 sm:p-3"
            src="https://em-content.zobj.net/source/apple/391/waving-hand_light-skin-tone_1f44b-1f3fb_1f3fb.png"
            alt=""
          />
        </h1>

        {/* Stats Cards */}
        <div className="flex flex-wrap gap-4 mt-10">
          {[
            { count: "26+", label: "Special offer clicks" },
            { count: "20+", label: "appointment books" },
            { count: "35+", label: "Review checks" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex-1 min-w-[180px] max-w-[260px] bg-white rounded-3xl p-4 px-6"
            >
              <h1 className="text-4xl sm:text-5xl font-bold">{item.count}</h1>
              <h1 className="text-base sm:text-lg font-medium tracking-tighter">
                {item.label}
              </h1>
            </div>
          ))}
        </div>

        {/* Table Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl tracking-tighter font-medium mt-14 flex items-center gap-2">
          <BiSolidOffer /> Running special offers
        </h1>

        {/* Responsive Table */}
        <div className="mt-6 w-full overflow-x-auto">
          <div className="bg-white rounded-xl shadow-sm min-w-[600px]">
            <table className="w-full table-fixed">
              <thead className="bg-orange-400 text-white">
                <tr>
                  <th className="py-4 px-6 w-1/5">Offer Name</th>
                  <th className="py-4 px-6 w-2/5">Description</th>
                  <th className="py-4 px-6 w-1/6">Price (₹)</th>
                  <th className="py-4 px-6 w-1/6">Discount (%)</th>
                  <th className="py-4 px-6 text-center w-1/6">Actions</th>
                </tr>
              </thead>
              <tbody>
                {offers.map((offer, index) => (
                  <tr
                    key={offer.id}
                    className={index % 2 === 0 ? "bg-orange-50" : "bg-white"}
                  >
                    <td className="py-4 px-6 font-medium">{offer.name}</td>
                    <td className="py-4 px-6">{offer.description}</td>
                    <td className="py-4 px-6 text-center">
                      ₹{offer.price.toLocaleString()}
                    </td>
                    <td className="py-4 px-6 text-center">{offer.discount}%</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleEdit(offer.id)}
                          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
                        >
                          <FiEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(offer.id)}
                          className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
                        >
                          <RiDeleteBin6Line />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add Offer Button */}
        <div className="flex justify-end mt-6">
          <button
            onClick={toggleForm}
            className="bg-orange-400 text-white py-2 px-4 sm:px-6 rounded-lg hover:bg-orange-500 transition-colors flex items-center gap-2 text-sm sm:text-base"
          >
            <BiSolidOffer /> Add New Offer
          </button>
        </div>

        {/* Logout Button */}
        <button className="bg-orange-400 fixed z-10 right-4 sm:right-6 md:right-10 top-4 sm:top-6 md:top-10 text-white py-2 px-4 sm:px-6 rounded-lg hover:bg-orange-500 transition-colors flex items-center gap-2 font-semibold">
          <CiLogout /> Logout
        </button>

        {/* Modal */}
        {isFormOpen && (
          <>
            <div className="bg-black opacity-20 h-screen w-full fixed top-0 left-0 z-20"></div>
            <div className="h-[90vh] max-h-[90vh] fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[90vw] md:w-[70vw] lg:w-[60vw] rounded-xl shadow-lg overflow-auto">
              {/* ...keep your modal content the same inside */}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;

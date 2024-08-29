import React, { useState, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";
import axios from "axios";

function JobsAds() {
  const [industry, setIndustry] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [details, setDetails] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const storedToken = localStorage.getItem("authToken");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/jobs/create/${user._id}`,
        {
          industry,
          businessName,
          mobileNo,
          email,
          companyWebsite,
          details,
          contact,
          address,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      navigate(`/vacancy-required/${response.data.job._id}`);
    } catch (error) {
      console.error(error);
    }
  };

  if (user.companyInfo) {
    return <Navigate to={"/activity"} />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Company Details
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4">
          {/* Industry */}
          <div>
            <label
              htmlFor="industry"
              className="block text-gray-700 font-semibold mb-2">
              Industry
            </label>
            <input
              type="text"
              id="industry"
              value={industry}
              onChange={e => setIndustry(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter Industry"
            />
          </div>

          {/* Business Name */}
          <div>
            <label
              htmlFor="businessName"
              className="block text-gray-700 font-semibold mb-2">
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              value={businessName}
              onChange={e => setBusinessName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter Business Name"
            />
          </div>

          {/* Mobile No */}
          <div>
            <label
              htmlFor="mobileNo"
              className="block text-gray-700 font-semibold mb-2">
              Mobile No
            </label>
            <input
              type="text"
              id="mobileNo"
              value={mobileNo}
              onChange={e => setMobileNo(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter Mobile No"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter Email"
            />
          </div>

          {/* Company Website */}
          <div>
            <label
              htmlFor="companyWebsite"
              className="block text-gray-700 font-semibold mb-2">
              Company Website
            </label>
            <input
              type="text"
              id="companyWebsite"
              value={companyWebsite}
              onChange={e => setCompanyWebsite(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter Company Website"
            />
          </div>

          {/* Details */}
          <div>
            <label
              htmlFor="details"
              className="block text-gray-700 font-semibold mb-2">
              Details
            </label>
            <input
              type="text"
              id="details"
              value={details}
              onChange={e => setDetails(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter Details"
            />
          </div>

          {/* Contact */}
          <div>
            <label
              htmlFor="contact"
              className="block text-gray-700 font-semibold mb-2">
              Contact
            </label>
            <input
              type="text"
              id="contact"
              value={contact}
              onChange={e => setContact(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter Contact"
            />
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-gray-700 font-semibold mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={e => setAddress(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter Address"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter Description"
              rows="4"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default JobsAds;

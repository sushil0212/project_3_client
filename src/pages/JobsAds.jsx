// src/pages/JobsAds.jsx
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
      navigate(`/generate-video/${response.data.job._id}`);
    } catch (error) {
      console.error(error);
    }
  };

  if (user.companyInfo) {
    return <Navigate to={"/activity"} />;
  }

  return (
    <div>
      <h2>Company Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="industry">Industry</label>
        <input
          type="text"
          id="industry"
          value={industry}
          onChange={e => setIndustry(e.target.value)}
        />
        <label htmlFor="businessName">Business Name</label>
        <input
          type="text"
          id="businessName"
          value={businessName}
          onChange={e => setBusinessName(e.target.value)}
        />
        <label htmlFor="mobileNo">Mobile No</label>
        <input
          type="text"
          id="mobileNo"
          value={mobileNo}
          onChange={e => setMobileNo(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="companyWebsite">Company Website</label>
        <input
          type="text"
          id="companyWebsite"
          value={companyWebsite}
          onChange={e => setCompanyWebsite(e.target.value)}
        />
        <label htmlFor="details">Details</label>
        <input
          type="text"
          id="details"
          value={details}
          onChange={e => setDetails(e.target.value)}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          id="contact"
          value={contact}
          onChange={e => setContact(e.target.value)}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default JobsAds;
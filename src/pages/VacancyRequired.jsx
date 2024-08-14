// src/pages/VacancyRequired.jsx
import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";

function VacancyRequired() {
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [workingDays, setWorkingDays] = useState("");
  const [qualification, setQualification] = useState("");
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [vacancies, setVacancies] = useState([{ role: "", quantity: "" }]);

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const storedToken = localStorage.getItem("authToken");

  const handleVacanciesChange = (index, e) => {
    const newVacancies = [...vacancies];
    newVacancies[index][e.target.name] = e.target.value;
    setVacancies(newVacancies);
  };

  /*   const addVacancy = () => {
    setVacancies([...vacancies, { role: "", quantity: "" }]);
  }; */

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const shortData = {
        position,
        salary,
        workingDays,
        role,
        qualification,
        experience,
        vacancies,
      };

      const shortResponse = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/shorts/create/${user._id}`,
        shortData,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      if (!shortResponse.data.short) {
        throw new Error("Job creation failed");
      }
      const shortId = shortResponse.data.short._id;

      // Navigate to GenerateVideo page
      navigate(`/generate-video/${shortId}`);
    } catch (error) {
      console.error("Error creating job:", error);
    }
  };

  return (
    <div>
      <h2>Vacancy Requirements</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="position">Position</label>
        <input
          type="text"
          id="position"
          value={position}
          onChange={e => setPosition(e.target.value)}
        />
        <label htmlFor="salary">Salary</label>
        <input
          type="text"
          id="salary"
          value={salary}
          onChange={e => setSalary(e.target.value)}
        />
        <label htmlFor="workingDays">Working Days</label>
        <input
          type="text"
          id="workingDays"
          value={workingDays}
          onChange={e => setWorkingDays(e.target.value)}
        />
        <label htmlFor="qualification">Qualification</label>
        <input
          type="text"
          id="qualification"
          value={qualification}
          onChange={e => setQualification(e.target.value)}
        />
        <label htmlFor="role">Role</label>
        <input
          type="text"
          id="role"
          value={role}
          onChange={e => setRole(e.target.value)}
        />
        <label htmlFor="experience">Experience</label>
        <input
          type="text"
          id="experience"
          value={experience}
          onChange={e => setExperience(e.target.value)}
        />
        {/* <div>
          {vacancies.map((vacancy, index) => (
            <div key={index}>
              <label htmlFor={`role-${index}`}>Role</label>
              <input
                type="text"
                id={`role-${index}`}
                name="role"
                value={vacancy.role}
                onChange={e => handleVacanciesChange(index, e)}
              />
              <label htmlFor={`quantity-${index}`}>Quantity</label>
              <input
                type="text"
                id={`quantity-${index}`}
                name="quantity"
                value={vacancy.quantity}
                onChange={e => handleVacanciesChange(index, e)}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addVacancy}>
            Add Vacancy
          </button>
        </div> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default VacancyRequired;

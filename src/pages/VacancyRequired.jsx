/* // src/pages/VacancyRequired.jsx
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
        <label htmlFor="experience">Vacancies</label>
        <input
          type="number"
          id="vacancies"
          value={vacancies}
          onChange={e => setVacancies(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default VacancyRequired;
 */

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Vacancy Requirements
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6">
          <div>
            <label
              htmlFor="position"
              className="block text-gray-700 font-medium mb-2">
              Position
            </label>
            <input
              type="text"
              id="position"
              value={position}
              onChange={e => setPosition(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter Position"
            />
          </div>

          <div>
            <label
              htmlFor="salary"
              className="block text-gray-700 font-medium mb-2">
              Salary
            </label>
            <input
              type="text"
              id="salary"
              value={salary}
              onChange={e => setSalary(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter Salary"
            />
          </div>

          <div>
            <label
              htmlFor="workingDays"
              className="block text-gray-700 font-medium mb-2">
              Working Days
            </label>
            <input
              type="text"
              id="workingDays"
              value={workingDays}
              onChange={e => setWorkingDays(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter Working Days"
            />
          </div>

          <div>
            <label
              htmlFor="qualification"
              className="block text-gray-700 font-medium mb-2">
              Qualification
            </label>
            <input
              type="text"
              id="qualification"
              value={qualification}
              onChange={e => setQualification(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter Qualification"
            />
          </div>

          <div>
            <label
              htmlFor="role"
              className="block text-gray-700 font-medium mb-2">
              Role
            </label>
            <input
              type="text"
              id="role"
              value={role}
              onChange={e => setRole(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter Role"
            />
          </div>

          <div>
            <label
              htmlFor="experience"
              className="block text-gray-700 font-medium mb-2">
              Experience
            </label>
            <input
              type="text"
              id="experience"
              value={experience}
              onChange={e => setExperience(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter Experience"
            />
          </div>

          <div>
            <label
              htmlFor="vacancies"
              className="block text-gray-700 font-medium mb-2">
              Vacancies
            </label>
            <input
              type="number"
              id="vacancies"
              value={vacancies}
              onChange={e => setVacancies(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter Number of Vacancies"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default VacancyRequired;

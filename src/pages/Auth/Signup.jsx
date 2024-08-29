/* import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleUsername = e => setUsername(e.target.value);
  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);
  const handleFileUpload = async e => {
    //configuring how to send the file
    const uploadData = new FormData();
    uploadData.append("imgUrl", e.target.files[0]);
    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/upload/image`,
        uploadData
      );
      setLoading(false);
      setProfilePic(response.data.fileUrl);
      console.log(response.data.fileUrl);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      //same as the process.env that we saw on the server, but for vite
      //http://localhost:5005
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, {
        username,
        email,
        password,
        profilePic,
      });
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };
  return (
    <div className="SignupPage">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={handleUsername}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />
        <label htmlFor="imgUrl">Profile Picture</label>
        <input
          type="file"
          name="imgUrl"
          id="imgUrl"
          onChange={handleFileUpload}
        />

        <button
          disabled={loading}
          type="submit">
          Sign Up
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have an account?</p>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Signup;
 */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleUsername = e => setUsername(e.target.value);
  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);
  const handleFileUpload = async e => {
    const uploadData = new FormData();
    uploadData.append("imgUrl", e.target.files[0]);
    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/upload/image`,
        uploadData
      );
      setLoading(false);
      setProfilePic(response.data.fileUrl);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, {
        username,
        email,
        password,
        profilePic,
      });
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="SignupPage min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Signup</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4">
          <label
            htmlFor="username"
            className="block text-left">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleUsername}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <label
            htmlFor="email"
            className="block text-left">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <label
            htmlFor="password"
            className="block text-left">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePassword}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <label
            htmlFor="imgUrl"
            className="block text-left">
            Profile Picture
          </label>
          <input
            type="file"
            name="imgUrl"
            id="imgUrl"
            onChange={handleFileUpload}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <button
            disabled={loading}
            type="submit"
            className="w-full mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        <p className="mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
